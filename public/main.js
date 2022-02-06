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
