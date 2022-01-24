require('../config/passport/passport');
const express = require('express');
const passport = require('passport');
const router = express.Router();

const account = require('../controller/auth');

router.post('/register', account.register);
router.post('/login', passport.authenticate('local', {
    failureMessage: true
}), account.login)
module.exports = router;