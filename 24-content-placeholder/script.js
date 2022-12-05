const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')
const url = "https://source.unsplash.com/random/?landscape" 
const time = new Date()
const day = time.toString().slice(3, -27)

setTimeout(getData, 1000)

async function getData() {
  const response = await fetch(url)
  const data = response.url

  header.innerHTML =
    `<img src="${data}" alt="" />`
  title.innerHTML = 'Breathtaking Landscapes'
  excerpt.innerHTML =
    'While there are plenty of awe-inspiring man-made destinations around the globe, nothing is as creative as nature'
  profile_img.innerHTML =
    '<img src="./image/avatar.png" alt="" />'
  name.innerHTML = 'JA'
  date.innerHTML = `${day}`

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}