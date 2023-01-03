"use strict"

import fs from 'fs';
import chalk from 'chalk';


function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm
    const capturas = [...texto.matchAll(regex)];
    const resutados = capturas.map(captura => ({ [captura[1]]: captura[2] }))
    return resutados


}


function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Arquivo não encontrado no diretório'));
}

async function pegaArquivo(caminhoDoArequivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile
            (caminhoDoArequivo, encoding);
        console.log(extraiLinks(texto))
    } catch (erro) {
        trataErro(erro)
    }
}

export default pegaArquivo;







