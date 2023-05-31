import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { SchoolFamily } from './SchoolFamily';
import { Doubt } from './Doubt';


@Entity('students')
export class Student{

    @PrimaryGeneratedColumn()
    enrollment :number; //enrollment = inscricao/matricula

    @ManyToOne(()=> SchoolFamily, (school :SchoolFamily) => school.students )
    @JoinColumn({name :'ID_school_family'}) // definindo nome da foreign key
    schoolFamily :SchoolFamily; //ID_school :number;

    @Column({ type: 'char varying', length: 100 })
    name :string;
/*
    @Column({ type: 'char varying', length: 20 })
    login :string;

    @Column({ type: 'char varying', length: 20 })
    password :string;
*/
    @Column({ type: 'int'})
    progress :string;

    @OneToMany( ()=> Doubt, (doubts :Doubt) => doubts.student )
    doubts :Doubt[];
}



