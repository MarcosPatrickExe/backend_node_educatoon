import express, { Request, Response } from "express";
import { appDataSource } from './data-source';
import 'dotenv/config'; // mt necessario para reconhecer o arquivo .env dentro do Node


async function initialize() {

    try{
        await appDataSource.initialize();
        console.log("Connection with database has been estabished!!!");


        const app = express();

        app.use( express.json() );//JSON serao tipo de dado usado pela API

        app.get('/', (request :Request, response :Response)=>{
          //  response.json({message: "success!!"});
            response.send("okay!!");
        });

        const appPort = process.env.APPLICATION_PORT;

        app.listen( appPort, ()=>{
            console.log(`Listening on port ${appPort}`);
        });

    }catch(error){
        console.log("Error de inicializacao do DataSource: "+ error);
    }
}
/*
.catch((error :any)=>{
    console.log("ERRO DE CONEXAO COM O DATABASE: "+ error);
});

*/

initialize();









