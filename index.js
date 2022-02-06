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

// const accountSid = 'AC0d8e1ac38fc7e791fa970f53085f2f67'
// const authToken = '967ff851c5dd4ba05c59c95fbc7ee67e'
// const client = require('twilio')(accountSid, authToken)
// client.calls
//   .create({
//     url: 'http://demo.twilio.com/docs/voice.xml',
//     to: '+918332826244',
//     from: '+19125518360',
//   })
//   .then((call) => console.log(call.sid))

// const accountSid = 'AC0d8e1ac38fc7e791fa970f53085f2f67';
// const authToken = '[AuthToken]';
// const client = require('twilio')(accountSid, authToken);

// client.messages
//       .create({
//          body: 'Hello! ',
//          from: 'whatsapp:+14155238886',
//          to: 'whatsapp:+918332826244'
//        })
//       .then(message => console.log(message.sid))
//       .done();
