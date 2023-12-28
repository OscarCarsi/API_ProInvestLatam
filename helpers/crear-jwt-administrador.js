const jwt = require('jsonwebtoken');


const generarJWT = (usuario = '') =>{

    return new Promise((resolve, reject)=>{

        const payload = {usuario};

        jwt.sign(payload, process.env.LLAVEPRIVADA,{
            expiresIn: '2h'},
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