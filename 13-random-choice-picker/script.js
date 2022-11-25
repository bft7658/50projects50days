const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10)
    randomSelect()
  }
})

function createTags(input) {
  // 先過濾掉空白內容，然後再對每個元素做 trim() 處理
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

  tagsEl.innerHTML = ''

  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}

function randomSelect() {
  // 由於 setInterval 與 setTimeout 設置相同延遲時間，那麼在這段程式碼裡，可以看做 tag 閃爍亮了幾次
  const times = 10

  // 執行 tag 閃爍的功能
  const interval = setInterval(() => {
    const randomTag = pickRandomTag()
    if (randomTag !== undefined) {
      highlightTag(randomTag)
      setTimeout(() => {
        unHighlightTag(randomTag)
      }, 100)
    }
  }, 100);
  
  // 閃爍完，最後定格在隨機一個 tag 上
  setTimeout(() => {
    // 要記得清掉 setInterval，否則會一直執行
    clearInterval(interval)
    setTimeout(() => {
      const randomTag = pickRandomTag()
      highlightTag(randomTag)
    }, 100)

  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')

  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add('highlight')
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight')
}
