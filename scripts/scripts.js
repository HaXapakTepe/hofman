document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const logo = document.querySelector('.logo')
  const menuItem = document.querySelectorAll('.menu__item')
  const socialsLink = document.querySelectorAll('.socials__link')
  const index = document.querySelectorAll('.index')
  const goto = document.querySelectorAll('.goto[data-goto]')

  index.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      window.location.href = '/hofman/#step'
    })
  })

  if (goto.length > 0) {
    goto.forEach((link) => {
      link.addEventListener('click', onMenuLinkClick)
    })

    function onMenuLinkClick(e) {
      const link = e.target
      if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
        const gotoBlock = document.querySelector(link.dataset.goto)
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top
        window.scrollBy({
          top: gotoBlockValue,
          behavior: 'smooth',
        })
        e.preventDefault()
      }
    }
  }

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

    lungeHiddenItem?.forEach(function (item) {
      const inputField = item.parentNode.previousElementSibling?.querySelector('.lunge__label-text')
      item.addEventListener('click', function () {
        inputField.textContent = item.textContent.trim()
        item.parentNode.previousElementSibling.click()
        lungeHiddenItem.forEach((item) => {
          item.classList.remove('lunge__hidden-item--active')
        })
        this.classList.add('lunge__hidden-item--active')
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

  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i)
    },
    any: function () {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()
    },
  }

  setTimeout(function () {
    var content = document.querySelector('.wrapper')
    content.classList.remove('hidden')

    var opacity = 1

    var opacityTimer = setInterval(function () {
      var preloader = document.querySelector('.preloader')

      if (isMobile.any()) opacity = Number(opacity) - 0.04
      else opacity = Number(opacity) - 0.01

      preloader.style.opacity = opacity

      if (opacity < 0) {
        clearInterval(opacityTimer)

        preloader.remove()
      }
    }, 1)
  }, 1500)
})
