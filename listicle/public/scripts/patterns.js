const renderPatterns = async () => {
  const response = await fetch('/patterns')
  const data = await response.json()
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''

  if (!Array.isArray(data) || data.length === 0) {
    const message = document.createElement('h2')
    message.textContent = 'No patterns available yet.'
    mainContent.append(message)
    return
  }

  const grid = document.createElement('div')
  grid.className = 'card-grid'

  data.forEach((pattern) => {
    const card = document.createElement('article')
    card.className = 'card'

    const banner = document.createElement('div')
    banner.className = 'card-banner'
    banner.style.backgroundImage = `url(${pattern.image || `https://picsum.photos/seed/${pattern.id}/900/500`})`

    const cardBody = document.createElement('div')
    cardBody.className = 'card-body'

    const name = document.createElement('h2')
    name.textContent = pattern.name

    const category = document.createElement('p')
    category.className = 'chip'
    category.textContent = pattern.category

    const summary = document.createElement('p')
    summary.textContent = pattern.summary

    const difficulty = document.createElement('p')
    difficulty.textContent = `Difficulty: ${pattern.difficulty}`

    const actionLink = document.createElement('a')
    actionLink.href = `/patterns/${pattern.id}`
    actionLink.textContent = 'Read more'
    actionLink.role = 'button'

    cardBody.append(name, category, summary, difficulty, actionLink)
    card.append(banner, cardBody)
    grid.append(card)
  })

  mainContent.append(grid)
}

renderPatterns()
