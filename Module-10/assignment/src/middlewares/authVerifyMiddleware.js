
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.header('auth-token')
    console.log(token);
    if (!token) return res.status(401).json('Access Denied')

    try {
        const verified = jwt.verify(token, 'secret123456789')
        req.user = verified
        console.log(req.user);
        console.log("verify success");
        next()
    } catch (error) {
        res.status(400).json('Invalid Token')
    }
}