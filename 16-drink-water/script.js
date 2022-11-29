const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')
const bigCupHeight = document.querySelectorAll('.cup')[0].clientHeight

updateBigCup()

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
  // 取消當下點擊的小水杯
  if (idx === smallCups.length - 1 && smallCups[idx].classList.contains("full")) {
    idx--
  } else if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
    idx--
  }

  smallCups.forEach((cup, idx2) => {
    // 如果目前空的小水杯編號(idx2)，小於被點擊的編號(idx)，代表杯裡要裝滿水
    if (idx2 <= idx) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })

  updateBigCup()
}

function updateBigCup () {
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${fullCups / totalCups * bigCupHeight}px`
    percentage.innerText = `${fullCups / totalCups * 100}%`
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
    liters.innerText = `${2 - (250 * fullCups / 1000)}L`
  }
}