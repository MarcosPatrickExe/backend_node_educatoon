import { Repository } from 'typeorm';
import { appDataSource } from '../data-source';
import { SchoolFamily } from '../entities/SchoolFamily';


export const schoolFamilyRespository = appDataSource.getRepository(SchoolFamily);