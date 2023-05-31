import { Request, Response } from "express";
import { stringify } from "querystring";
import { appDataSource } from '../data-source';


type SchoolFamily={
 //   ID_school_family :number,
    name :string,
    CNPJ ?:number,
    CPF ?:number,
    plan_type :string,
    dateOfSignature :Date,
    planValue :number,
    payday :Date,
    state ?:string,
    city ?:string,
    streetName ?:string,
    login :string,
    email: string,
    passsowrd :string,
    phone ?:number,
    CEP :number,
}



export class SchoolFamilyController{

    async createSchoolFamily(req :Request, res :Response){

        const schoolFamilyplan = req.body as SchoolFamily;

        console.log("Objeto recebido:  \n \n", JSON.stringify(schoolFamilyplan) );

        if(!schoolFamilyplan.CPF && !schoolFamilyplan.CPF){
            console.log("CPF e CNPJ nao podem ser vazios simultaneamente!!!!");
            res.status(400).send("CPF nao pode ser vazio!!!!");
        }else{
             // return res.json("objecto cadastrado!!!");
             res.status(200).json({message: "student has been created with success!!"});
             // o 'return' nao eh obrigatorio!!! 
        }    
    }

}