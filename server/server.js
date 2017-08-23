require('dotenv').config()
const passport = require('passport')
const InstagramStrategy = require('passport-instagram').Strategy
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')

const app = module.exports = express()
app.set('port', process.env.PORT || 5000)

// MIDDLEWARE FOR EVERYTHING TO PASS THROUGH ================
app.use(bodyParser.json())
app.use(cors())

passport.use(new InstagramStrategy({
		clientID: process.env.INSTA_CLIENT_ID,
		clientSecret: process.env.INSTA_CLIENT_SECRET,
		callbackURL: "http://localhost:5000/auth/instagram/callback"
	},
	function(accessToken, refreshToken, profile, done) {
		console.log('stuff: ', accessToken, profile)
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