const fakecallbtn = document.getElementById('fakecall')
const chatbotBtn = document.getElementById('chatbot')

fakecallbtn.addEventListener('click', () => {
  const num = '+918332826244'
  fetch('/fakecall', {
    method: 'POST',
    body: JSON.stringify({ phoneNumber: num }),
    headers: { 'Content-Type': 'application/json' },
  })
})

chatbotBtn.addEventListener('click', () => {
  const num = '+1 (415) 523-8886'
  alert('Chatbot number is ' + num)
})
