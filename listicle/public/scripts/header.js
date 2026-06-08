const header = document.querySelector('header')
const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const title = document.createElement('h1')
title.textContent = 'LeetCode Pattern Guide'

const subtitle = document.createElement('p')
subtitle.textContent = 'Learn common LeetCode strategies and see examples for each pattern.'

headerLeft.append(title, subtitle)

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const button = document.createElement('button')
button.textContent = 'Home'
button.addEventListener('click', () => {
  window.location = '/'
})

headerRight.append(button)
headerContainer.append(headerLeft, headerRight)
header.append(headerContainer)
