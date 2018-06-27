const fs = require('fs');


let listarTabla = (base, limite = 10) => {

    console.log('=========================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('=========================.'.green);

    for (let i = 1; i <= limite; i++) {

        console.log(`${base} x ${i} = ${base*i}`);
    }

}

crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} x ${i} = ${base*i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}limite${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`The file tabla-${base}limite${limite}.txt has been saved!`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}