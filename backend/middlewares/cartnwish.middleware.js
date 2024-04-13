const jwt = require('jsonwebtoken')

const cartnwish = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]
    if (token) {
        const decoded = jwt.verify(token, 'masai');
        if (decoded) {
            req.body.userID = decoded.userID
            next()
        }
        else {
            res.status(401).send({ "message": "you ar not authorized!" })
        }
    }
    else {
        res.status(401).send({ "message": "token not found!" })
    }
}


module.exports = {
    cartnwish
}