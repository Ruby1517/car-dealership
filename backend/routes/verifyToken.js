const jwt = require("jsonwebtoken");


const verifytoken = (req, res, next) => {
    const authHeader = req.headers.token;
    if(authHeader) {
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if(err) res.status(403).json("Token is not valid!")
            req.user = user
            next();
        })
    } else {
        return res.status(401).json("You are not authenticated!")
    }
}

const verifyTokenAndAuthorization = (req, res, next) => {
    verifytoken(req,res,() => {
        if(req.user.id === req.params.id || req.user.idAdmin) {
            next();
        } else {
            res.status(403).json("You are not alloed to do that1!")
        }
    })
}

const verifyTokenAndAdmin = (req, res, next) => {
    verifytoken(req,res,() => {
        if(req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not allWoed to do that1!")
        }
    })
}

module.exports = { verifytoken, verifyTokenAndAuthorization, verifyTokenAndAdmin}