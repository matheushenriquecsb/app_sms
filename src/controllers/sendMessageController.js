const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendMessage = async (req, res) => {
  try {
    const result = await client.messages.create({
      body: 'Teste 1',
      from: process.env.TWILIO_NUMBER,
      to: '+5571991910098'
    })
    res.status(200).send('Message send!');
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
}

module.exports = sendMessage;
