const header = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const headerLogo = document.createElement('img')
headerLogo.src = '/logo.png'
headerLogo.width = 200
headerLogo.height = 150

const headerTitle = document.createElement('h1')
headerTitle.textContent = 'eGift'

const headerButton = document.createElement('button')
headerButton.textContent = 'Home'
headerButton.addEventListener('click', function handleClick(event){
    window.location = '/'
})

headerLeft.appendChild(headerLogo)
headerLeft.appendChild(headerTitle)
headerRight.appendChild(headerButton)
headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)
header.append(headerContainer)
