const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const progress = document.querySelector('.progress')
const progressValue = document.querySelector('.progress-value')

let load = 0

// 每30毫秒執行一次 blurring 這個函式
let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
  progressValue.style.width = `${load}%`
  progressValue.style.opacity = scale(load, 0, 100, 1, 0)
  progress.style.opacity = scale(load, 0, 100, 1, 0)
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
// 把一個數字範圍映射到另一個數字範圍的 function
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers