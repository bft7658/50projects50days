const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

// 當前步驟
let currentStep = 1

// 下一步
next.addEventListener('click', () => {
  currentStep++

  if (currentStep > circles.length) {
    currentStep = circles.length
  }

  update()
})

// 上一步
prev.addEventListener('click', () => {
  currentStep--

  if (currentStep < 1) {
    currentStep = 1
  }

  update()
})

// 更新圓圈、進度條以及按鈕
function update() {
  // 圓圈
  circles.forEach((circle, index) => {
    if (index < currentStep) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  // 進度條
  // 檢查現在是進行到第幾個步驟
  const actives = document.querySelectorAll('.active')
  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%"

  // 按鈕
  if (currentStep === 1) {
    prev.disabled = true
  } else if (currentStep === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}