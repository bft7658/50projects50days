const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
  // 最終數字，use + to let the strings become numbers
  const target = +counter.getAttribute('data-target')
  // 每次累加值
  const increment = target / 200
  // 初始值
  let c = 0

  let int = setInterval(updateCounter, 1)

  function updateCounter() {
    if (c < target) {
      c = Math.ceil(c + increment)
      counter.innerText = `${c}`
    } else {
      clearInterval(int)
      counter.innerText = target
    }
  }

  // 教材寫法，還無法完全了解，所以先註解掉
  // counter.innerText = '0'
  // const updateCounter = () => {
  //   // use + to let the strings become numbers
  //   // JavaScript Type Conversion
  //   const target = +counter.getAttribute('data-target')
  //   const c = +counter.innerText
  //   const increment = target / 200

  //   if (c < target) {
  //     counter.innerText = `${Math.ceil(c + increment)}`
  //     setTimeout(updateCounter, 1)
  //   } else {
  //     counter.innerText = target
  //   }
  // }

  // updateCounter()
})