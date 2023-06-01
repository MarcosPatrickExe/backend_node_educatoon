import { Request, Response } from 'express';
import { studentRepository } from '../repositories/StudentRepo';
import { SchoolFamily } from '../entities/SchoolFamily';
import { schoolFamilyRespository } from '../repositories/SchoolFamilyRepo';


type StudentType = {
    schoolFamily ?:SchoolFamily; 
    name :string;
    progress :string;
}



export class StudentController{

    async addStudent(request :Request, response :Response ){
            
        try{
                const studentData = request.body as StudentType;

                const schoolFamily :SchoolFamily | null = await schoolFamilyRespository.findOneBy({ 
                        name: request.params.name,
                })

                console.log(JSON.stringify( schoolFamily ));


                if(!schoolFamily){
                   return response.status(404).send(`${request.params["name"]} is not registered in the database...`);
                    
                }else{
                    studentData.schoolFamily = schoolFamily;
                    let studentEntity = studentRepository.create(studentData);
                    studentEntity = await studentRepository.save(studentEntity);
                    response.status(281).json(studentEntity);
                }

        }catch(error :any){
            response.status(500).json({message: "There was an internal server error in the creation of the student account.... "+error});
        }
    }
}