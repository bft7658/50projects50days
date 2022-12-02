const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

// 滑鼠的動作
let isPressed = false
// 字體大小初始值
let size = 3
// 顏色初始值
let color = colorEl.value
// 設定座標
let x
let y

// 滑鼠按下
canvas.addEventListener('mousedown', (e) => {
  isPressed = true

  x = e.offsetX
  y = e.offsetY

  drawCircle(x, y)
})

// 滑鼠放開
document.addEventListener('mouseup', (e) => {
  isPressed = false

  x = undefined
  y = undefined
})

// 滑鼠移動
canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX
    const y2 = e.offsetY

    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)

    x = x2
    y = y2
  }
})

increaseBtn.addEventListener('click', () => {
  size++

  if (size > 10) {
    size = 10
  }

  updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
  size--

  if (size < 1) {
    size = 1
  }

  updateSizeOnScreen()
})

// 改變畫筆顏色
colorEl.addEventListener('change', (e) => color = e.target.value)

// 全部清除
clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))

updateSizeOnScreen()

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}

function updateSizeOnScreen() {
  sizeEL.innerText = size
}
