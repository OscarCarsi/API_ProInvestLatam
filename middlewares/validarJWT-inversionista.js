const { request, response } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req = request, res = response, next)=>{
    const token = req.header('token');

    if(!token){
        return res.status(401).json({msg:'No existe el token en la petición'})
    }

    try{
        const{direccionIp} = jwt.verify(token, process.env.LLAVEPRIVADA);
        req.direccionIp = direccionIp;
        next();
    }catch(error){
        console.log(error);
        res.status(401).json({
            msg:'Token no válido'
        })
    }

    
}

module.exports = {
    validarJWT
}