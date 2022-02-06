require('dotenv').config()
const express = require('express')
const app = express()

const accountSid = process.env.TWILIO_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)

app.use(express.static('public'))
app.use(express.json())

app.get('/health', (_, res) => {
  res.send('OK')
})

app.post('/fakecall', async (req, res) => {
  const phoneNumber = req.body.phoneNumber
  try {
    await client.calls.create({
      url: 'http://demo.twilio.com/docs/voice.xml',
      to: phoneNumber,
      from: '+19125518360',
    })
    res.json({ success: 'call has been successful' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err.message })
  }
})

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log('server started at port', port)
})

// client.messages
//       .create({
//          body: 'Hello! ',
//          from: 'whatsapp:+14155238886',
//          to: 'whatsapp:+918332826244'
//        })
//       .then(message => console.log(message.sid))
//       .done();
