require('dotenv').config()
const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/health', (_, res) => {
  res.send('OK')
})

const port = process.env.NODE_ENV || 8000

app.listen(port, () => {
  console.log('server started at port ', +port)
})
// const accountSid = process.env.TWILIO_SID
// const authToken = process.env.TWILIO_AUTH_TOKEN
// const client = require('twilio')(accountSid, authToken)
// client.calls
//   .create({
//     url: 'http://demo.twilio.com/docs/voice.xml',
//     to: '+918332826244',
//     from: '+19125518360',
//   })
//   .then((call) => console.log(call.sid))

// client.messages
//       .create({
//          body: 'Hello! ',
//          from: 'whatsapp:+14155238886',
//          to: 'whatsapp:+918332826244'
//        })
//       .then(message => console.log(message.sid))
//       .done();
