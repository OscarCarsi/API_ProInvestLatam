const jwt = require('jsonwebtoken');


const generarJWT = (rfc = '') =>{

    return new Promise((resolve, reject)=>{

        const payload = {rfc};

        jwt.sign(payload, process.env.LLAVEPRIVADA,{
            expiresIn: '30m'},
            (err,token)=>{
                if(err){
                    reject('No se pudo crear el token');
                }else{
                    resolve(token);
                }
            })
    })

}
const generarRefreshToken = (rfc) => {
    return new Promise((resolve, reject) => {
        const payload = { rfc };
        jwt.sign(payload, process.env.LLAVEPRIVADA, {
            expiresIn: '5h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el refresh token');
            } else {
                resolve(token);
            }
        });
    });
}

module.exports = {
    generarJWT, generarRefreshToken
}