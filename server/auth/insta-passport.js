require('dotenv').config()
const passport = require('passport-instagram');
const app = require('../server');

passport.use(new InstagramStrategy({
		clientID: process.env.INSTA_CLIENT_ID,
		clientSecret: process.env.INSTA_CLIENT_SECRET,
		callbackURL: "http://localhost:3000/auth/instagram/callback"
	},
	function(accessToken, refreshToken, profile, done) {
		console.log('stuff: ', accessToken, profile)
	}
));