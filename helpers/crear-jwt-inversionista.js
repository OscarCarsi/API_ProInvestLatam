const jwt = require('jsonwebtoken');


const generarJWT = (direccionIp = '') =>{

    return new Promise((resolve, reject)=>{

        const payload = {direccionIp};

        jwt.sign(payload, process.env.LLAVEPRIVADA,{
            expiresIn: '90m'},
            (err,token)=>{
                if(err){
                    reject('No se pudo crear el token');
                }else{
                    resolve(token);
                }
            })
    })

}

module.exports = {
    generarJWT
}