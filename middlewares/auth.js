const jwt = require("jsonwebtoken");
module.exports = (req, res, next)=>{
    if(req.headers['token']){
        const header = req.headers['token'];
        jwt.verify(token, 'palavrachave', (err, decode)=>{
            if(err){
                res.json({success : false, msg : 'Token Inválido'});
            }else{
                res.decode = decode;
                next();
            }
        })
    }else{
        res.json({success : false, msg : "Token não apresentado"});
    }
}