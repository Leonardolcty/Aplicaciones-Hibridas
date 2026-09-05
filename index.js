//const Users = require('./users.js');
import express from 'express';
import chalk from 'chalk';
import Users from "./users.js";

const app = express();
const port = 3000;
let cont = 0;
app.get('/', (request, response) => {
    cont++;
    console.log(chalk.blue(`Cliente concectado ${cont}`));
    response.send(`Hola desde Express.js, sos el cliente N:${cont}`);
});

console.log(chalk . blue . bgRed . bold("Hola Mundo"));

app.listen(port, () =>{
    console.log(chalk.green(`Servidor Web en el Puesto ${port}`));
    // Detenemos el proceso con Ctrl + C
});