const configJWT =  require('../config/jwt/index')
const jwt = require('jsonwebtoken');
const account = require('../models/account');
const brcypt = require('bcrypt');

const register = (async (req, res) => {
    const {
        username,
        password
    } = req.body;

    try {
        var isExistAccount = await account.findOne({
            username: username
        })
        console.log(isExistAccount);
        if (isExistAccount) {
            res.json({
                message: 'Account already'
            })
        } else if (password.length <= 5) {
            res.json({
                message: 'Password must be length > 5'
            })
        } else {
            let saltRound = 10;
            let hash = brcypt.hashSync(password,saltRound );
            const newAcount = new account({
                username: username,
                password: hash
            })
            console.log(newAcount.password);
            console.log(newAcount);

            newAcount.save();
            res.json({
                message: 'Register successfully',
                username: newAcount.username,
                password: newAcount.password
            })
        }
    } catch (err) {
        console.log(err);
    }
})
const login = async (req, res)=>{
    const userId = req.session.passport.user;
    const payload = { userId };
    console.log(payload);
    const access_token = jwt.sign(payload, configJWT.accessTokenSecret, {
        algorithm: "HS256",
        expiresIn: configJWT.accessTokenLife,
      });
    res.json({
        access_token: access_token,
        message: 'Login successfully'
    })
}
module.exports = {
    register,
    login
}