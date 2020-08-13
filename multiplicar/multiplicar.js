const fs = require('fs');
const colors = require('colors');

let listTable = (base, limit) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor base introducido ${base} no es número`)
            return
        }

        if (!Number(limit)) {
            reject(`El valor límite introducido ${limit} no es número`)
            return
        }

        console.log('=============================='.green);
        console.log(`========= Tabla de ${ base }==========`.green);
        console.log('=============================='.green);


        for (let counter = 0; counter <= limit; counter++) {
            console.log(`${base} * ${counter} = ${base * counter}`);
        }

    });
}

let createFile = (base, limit) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor base introducido ${base} no es un número`);
            return;
        }

        if (!Number(limit)) {
            reject(`El valor límite introducido ${limit} no es número`)
            return
        }

        let data = '';

        for (let counter = 1; counter <= limit; counter++) {
            // console.log(`${base} * ${counter} = ${base * counter}`);
            data += `${base} * ${counter} = ${base*counter}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}.txt`)
            }

        });

    });
}

module.exports = {
    createFile,
    listTable
}