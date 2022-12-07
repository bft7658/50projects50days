const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
  const notifDiv = document.createElement('div')
  notifDiv.classList.add('toast')
  notifDiv.classList.add(type ? type : getRandomType())

  notifDiv.innerText = message ? message : getRandomMessage()

  toasts.appendChild(notifDiv)

  setTimeout(() => {
    notifDiv.remove()
  }, 3000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)]
}