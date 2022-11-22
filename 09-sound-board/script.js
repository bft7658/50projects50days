let sounds = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.classList.add('btn')

  btn.innerText = sound

  btn.addEventListener('click', () => {
    stopSongs()
    document.getElementById(sound).play()
  })

  document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)

    song.pause()
    // 代表每個音檔會從 0 秒的地方開始播放起
    song.currentTime = 0;
  })
}