require('dotenv').config()
const InstagramStrategy = require('passport-instagram').Strategy
const bodyParser = require('body-parser')
const passport = require('passport')
const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = module.exports = express()
const base_url = module.exports = 'https://api.instagram.com/v1'
app.set('port', process.env.PORT || 5000)

// MIDDLEWARE FOR EVERYTHING TO PASS THROUGH ================
app.use(bodyParser.json())
app.use(cors())

passport.use(new InstagramStrategy({
		clientID: process.env.INSTA_CLIENT_ID,
		clientSecret: process.env.INSTA_CLIENT_SECRET,
		callbackURL: "http://localhost:5000/auth/instagram/callback"
	},
	(accessToken, refreshToken, profile, done) => {
		axios.get(`${base_url}/users/self/media/recent/?access_token=${accessToken}`)
			.then(res => {
				console.log('res: ', res.data)
				const user = res.data.data
				const info = user.map(e => e.user)
				console.log('info: ', info)
			})
			.catch(err => console.log('err: ', err))
	}
));


app.get('/login', req => console.log('failure: ', req.body))
app.get('/auth/insta', passport.authenticate('instagram'))
app.get('/auth/instagram/callback',
	passport.authenticate('instagram', {failureRedirect: '/login'}),
	(req,res,next) => {
	console.log('success: ', req.body)
	})


app.listen(app.get('port'), () => {
	console.log('listening on: ', app.get('port'))
})