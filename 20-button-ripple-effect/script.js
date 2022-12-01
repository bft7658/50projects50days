const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    // 點擊的座標點
    const x = e.pageX
    const y = e.pageY
    // 按鈕框框的座標點
    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft
    // position 的偏移量
    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'
    // 這裡使用 this，所以 arrow function 要改成一般 function 寫法
    this.appendChild(circle)

    setTimeout(() => circle.remove(), 500)
  })
})