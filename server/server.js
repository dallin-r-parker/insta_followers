require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = module.exports = express()
app.set('port', process.env.PORT || 5000)

// MIDDLEWARE FOR EVERYTHING TO PASS THROUGH ================
app.use(bodyParser.json())
app.use(cors())


app.listen(app.get('port'), () => {
	console.log('listening on: ', app.get('port'))
})