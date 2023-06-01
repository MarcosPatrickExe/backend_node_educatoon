import { appDataSource } from '../data-source';
import { Student } from '../entities/Student';


export const studentRepository = appDataSource.getRepository(Student);