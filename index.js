"use strict"

import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Arquivo não encontrado no diretório'));
}

function pegaArquivo(caminhoDoArequivo) {
    const encoding = 'utf-8';
    fs.promises
        .readFile(caminhoDoArequivo, encoding)
        .then((texto) => console.log(chalk.gray(texto)))
        .catch(trataErro)
}


pegaArquivo('./texto.md')




