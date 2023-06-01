import { Request, Response } from "express";
import { schoolFamilyRespository } from "../repositories/SchoolFamilyRepo";
import { SchoolFamily } from "../entities/SchoolFamily";


type SchoolFamilyType ={
 //   ID_school_family :number,
    name :string,
    CNPJ ?:string,
    CPF ?:string,
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
    phone ?:string,
    CEP :string,
}



export class SchoolFamilyController{

    async addSchoolFamily(req :Request, res :Response){
      /*  let schoolFamilyRepo = appDataSource.getRepository( SchoolFamily).extend({
            findStudentByName(){
                // ao criar metodos personalizaveis dentro de um repository inline e q se
               //  encontra dentro de um controller pode futuramente deixar o codigo mais
               //  bagunçado, portanto, creou-se um repositorio fora do controller...
                
            }
        });
      */

        const schoolFamily = req.body as SchoolFamilyType;

        console.log("Objeto recebido:  \n \n", JSON.stringify(schoolFamily) );

        if(!schoolFamily.CPF && !schoolFamily.CPF){
            console.log("CPF and CNPJ cannot be empty simultaneously...");
            res.status(400).send("CPF cannot be empty..");

        }else{
            try{
                const schoolFamilyEntityInit :SchoolFamily = schoolFamilyRespository.create(schoolFamily); // criando entidade 'SchoolFamily' com seus atributos inicializados atraves do objeto 'schoolFamily'

                await schoolFamilyRespository.save( schoolFamilyEntityInit );

                // return res.json("objecto cadastrado!!!");
                res.status(281).json(schoolFamilyEntityInit);
                res.status(281).send("student has been created with success!!");
                // o 'return' nao eh obrigatorio!!! 

            }catch(error :any){
                res.status(500).json({message: "Internal Server Error on create SchoolFamily.... "+error});
            }
        }    
    }

}