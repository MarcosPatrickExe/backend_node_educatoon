import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Student } from './Student';
import { SchoolFamily } from "./SchoolFamily";


@Entity('teachers')
export class Teacher{

    @PrimaryGeneratedColumn()
    ID_teacher :number;
 
    @ManyToOne(()=> SchoolFamily, (school :SchoolFamily) => school.teachers )
    @JoinColumn({ name: 'ID_school_family'})
    schoolFamily :SchoolFamily;

    @Column({ type: 'char varying', length :100 })
    name :string;

    @Column({ type: 'char varying', length :30 })
    discipline :string;

//  @Column()
//  ID_school :number;
}