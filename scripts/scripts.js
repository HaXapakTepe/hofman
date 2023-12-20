document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const logo = document.querySelector('.logo')
  const menuItem = document.querySelectorAll('.menu__item')
  const socialsLink = document.querySelectorAll('.socials__link')

  if (burger) {
    socialsLink.forEach((item) => {
      item.addEventListener('click', () => {
        burger.classList.toggle('burger--active')
        menu.classList.remove('menu--active')
        body.classList.remove('no-scroll')
      })
    })

    menuItem.forEach((item) => {
      item.addEventListener('click', () => {
        burger.classList.toggle('burger--active')
        menu.classList.remove('menu--active')
        body.classList.remove('no-scroll')
      })
    })

    burger.addEventListener('click', () => {
      burger.classList.toggle('burger--active')
      menu.classList.toggle('menu--active')
      body.classList.toggle('no-scroll')
    })

    document.addEventListener('click', () => {
      if (menu.classList.contains('.menu--active')) {
        logo.classList.add('logo--active')
      } else {
        logo.classList.remove('logo--active')
      }
    })
  }

  const accordionEl = document.querySelectorAll('.accordion')
  accordionEl?.forEach((acc) => {
    acc.addEventListener('click', (e) => {
      e.preventDefault()
      const content = acc.nextElementSibling
      if (acc.classList.contains('accordion--active')) {
        acc.classList.remove('accordion--active')
        content.style.maxHeight = '0'
      } else {
        acc.classList.add('accordion--active')
        content.style.maxHeight = content.scrollHeight + 'px'
      }
    })
  })

  const lunge = document.querySelectorAll('.lunge')
  lunge.forEach((el) => {
    const lungeHiddenItem = el.querySelectorAll('.lunge__hidden-item')
    const lungeInput = el.querySelector('.lunge__input')

    lungeHiddenItem?.forEach(function (item) {
      const inputField = item.parentNode.previousElementSibling?.querySelector('.lunge__input')
      item.addEventListener('click', function () {
        inputField.value = item.textContent.trim()
        item.parentNode.previousElementSibling.click()
        lungeHiddenItem.forEach((item) => {
          item.classList.remove('lunge__hidden-item--active')
        })
        this.classList.add('lunge__hidden-item--active')
      })
    })

    lungeInput?.addEventListener('input', function () {
      const inputValue = lungeInput.value.toLowerCase()
      let match = false

      lungeHiddenItem.forEach((label) => {
        const dataContent = label.textContent.toLowerCase()

        if (dataContent.includes(inputValue)) {
          match = true
          label.style.display = 'flex'
        } else {
          label.style.display = 'none'
        }
      })
    })
  })

  if (document.querySelector('[name="sum"]')) {
    const element = document.querySelector('[name="sum"]')
    const maskOptions = {
      mask: Number,
      min: 0,
      max: 1000000,
      thousandsSeparator: ' ',
    }
    const mask = IMask(element, maskOptions)
  }
})
