import { Router } from 'express';
import { SchoolFamilyController } from './controllers/SchoolFamilyController';


const routes = Router();

routes.post('/students', new SchoolFamilyController().createSchoolFamily );


export default routes;