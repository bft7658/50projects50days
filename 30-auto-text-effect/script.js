const tickerEl = document.getElementById('ticker')
const speedEl = document.getElementById('speed')
const wordEl = document.getElementById('word')
const textEl = document.getElementById('text')
let text = '輸入你喜歡的文字'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
  tickerEl.innerText = text.slice(0, idx)

  idx++

  if (idx > text.length) {
    idx = 1
  }

  setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)

wordEl.addEventListener('submit', (e) => {
  e.preventDefault()

  const textTerm = textEl.value.trim()
  console.log(textTerm)

  if (textTerm && textTerm !== '') {
    text = textTerm
    textEl.value = ''
  } else {
    textEl.value = ''
  }
})