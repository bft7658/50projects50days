const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver)
  empty.addEventListener('dragenter', dragEnter)
  empty.addEventListener('dragleave', dragLeave)
  empty.addEventListener('drop', dragDrop)
}

// 開始拖動元素
function dragStart() {
  this.className += ' hold'
  setTimeout(() => this.className = 'invisible', 0)
}

// 拖動操作結束
function dragEnd() {
  this.className = 'fill'
}

// 拖動元素待在有效的放置目標
function dragOver(e) {
  e.preventDefault()
}

// 拖動元素進入有效的放置目標
function dragEnter(e) {
  e.preventDefault()
  this.className += ' hovered'
}

// 拖動元素離開有效的放置目標
function dragLeave() {
  this.className = 'empty'
}

// 拖動元素被放置在有效的放置目標上
function dragDrop() {
  this.className = 'empty'
  this.append(fill)
}