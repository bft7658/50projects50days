const quoteBtn = document.getElementById('quoteBtn')
const text = document.querySelector('.text')
const author = document.querySelector('.author')
const url = "https://api.quotable.io/random" // https://github.com/lukePeavey/quotable

quoteBtn.addEventListener('click', () => {
  quoteBtn.disabled = true
  quoteBtn.innerText = 'loading'
  getQuote()
})

getQuote()

/* fetch quote */
async function getQuote() {
  const response = await fetch(url)
  const data = await response.json()

  text.innerText = `"${data.content}"`
  author.innerText = `— ${data.author}`

  quoteBtn.disabled = false
  quoteBtn.innerText = 'Get More'
}