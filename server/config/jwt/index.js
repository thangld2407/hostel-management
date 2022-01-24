const configJWT = Object.freeze({
    accessTokenLife: 60*60*1000, // Token tồn tại trong trong 1h 
    accessTokenSecret: "thangledinh",
    refreshTokenLife: 7 * 24 * 60 * 60 * 1000,
    refreshTokenSecret: 'Thang Refresh'
});


module.exports = configJWT;