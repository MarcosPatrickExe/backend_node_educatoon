import express, { Request, Response } from "express";
import { AppDataSource } from './data-source';
import { DataSource } from "typeorm";



AppDataSource
    .initialize()// iniciando conexao com o database
        .then( (value :DataSource)=>{
            //let nameDB = value.name;

            const app = express();

            app.use( express.json() );//JSON serao tipo de dado usado pela API
        
            app.get('/', (request :Request, response :Response)=>{
                 return response.json("Connection success!!");
            });

            const appPort = process.env.APPLICATION_PORT as string;

            return app.listen( Number( appPort), "localhost", 0, ()=>{
                console.log("Server is running......");
            });
            
        }).catch((error :any)=>{
            console.log(error);
        });







