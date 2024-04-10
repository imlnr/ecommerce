const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (token) {
        const decode = jwt.verify(token, "masai")
        if (decode) {
            next();
        } else {
            res.send({ "message": "you are not authorized Try with a new token " });
        }
    } else {
        res.send({ "message": "You are not authorized.." })
    }
}
module.exports = {
    auth
}