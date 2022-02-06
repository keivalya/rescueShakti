const fakecallbtn = document.getElementById('fakecall')
fakecallbtn.addEventListener('click', () => {
  const num = '+918332826244'
  fetch('/fakecall', {
    method: 'POST',
    body: JSON.stringify({ phoneNumber: num }),
    headers: { 'Content-Type': 'application/json' },
  })
})
