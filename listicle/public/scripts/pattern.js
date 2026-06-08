const renderPattern = async () => {
  const rawId = window.location.pathname.split('/').pop()
  const requestedId = Number(rawId)

  const response = await fetch('/patterns')
  const data = await response.json()
  const pattern = data.find((item) => item.id === requestedId)

  const patternContent = document.getElementById('pattern-content')
  patternContent.innerHTML = ''

  if (!pattern) {
    const message = document.createElement('div')
    message.className = 'card'
    message.innerHTML = `
      <h2>Pattern not found</h2>
      <p>The requested pattern does not exist. Try returning to the homepage.</p>
      <a href="/" class="contrast">Back to home</a>
    `
    patternContent.append(message)
    return
  }

  const detail = document.createElement('article')
  detail.className = 'pattern-detail'
  detail.innerHTML = `
    <div class="pattern-banner" style="background-image: url(${pattern.image || `https://picsum.photos/seed/${pattern.id}/1200/500`})"></div>
    <div class="pattern-details">
      <h2>${pattern.name}</h2>
      <div class="pattern-meta">
        <span>Difficulty: ${pattern.difficulty}</span>
        <span>${pattern.category}</span>
      </div>
      <p><strong>Summary:</strong> ${pattern.summary}</p>
      <p><strong>Example:</strong> ${pattern.example}</p>
      <p><strong>Tips:</strong> ${pattern.tips}</p>
      <p><a href="/" class="contrast">Back to home</a></p>
    </div>
  `

  patternContent.append(detail)
}

renderPattern()
