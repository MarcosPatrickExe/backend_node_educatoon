import { Router } from 'express';
import { SchoolFamilyController } from './controllers/SchoolFamilyController';
import { StudentController } from './controllers/StudentController';


const routes = Router();


routes.post('/addSchoolFamily', new SchoolFamilyController().addSchoolFamily );

routes.post('/addStudent/:name', new StudentController().addStudent );


export default routes;