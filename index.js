require('dotenv').config()
const express = require('express')

const accountSid = process.env.TWILIO_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)
const app = express()

app.use(express.static('public'))
app.use(express.json())

app.get('/health', (_, res) => {
  res.send('OK')
})

app.post('/fakecall', async (req, res) => {
  const phoneNumber = req.body.phoneNumber
  const call = await client.calls.create({
    url: 'http://demo.twilio.com/docs/voice.xml',
    to: phoneNumber,
    from: '+19125518360',
  })
  // .then((call) => {
  //   res.json({ success: 'call has been successful' })
  // })
  // .catch((err) => {
  //   res.status(400).json({ error: 'call failed' })
  // })
  res.json({ success: 'call has been successful' })
})

const port = process.env.NODE_ENV || 8000

app.listen(port, () => {
  console.log('server started at port ', +port)
})

// client.messages
//       .create({
//          body: 'Hello! ',
//          from: 'whatsapp:+14155238886',
//          to: 'whatsapp:+918332826244'
//        })
//       .then(message => console.log(message.sid))
//       .done();
