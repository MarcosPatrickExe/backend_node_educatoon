import { Column, Double, Entity, IsNull, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from './Student';
import { Teacher } from './Teacher';
import { FamilyMember } from "./FamilyMember";


@Entity('schools_families')
export class SchoolFamily{

    @PrimaryGeneratedColumn() // chave-primaria e auto-incremento
    ID_school_family: number;

    @Column({ type: 'character varying', length :80})
    name: string;

    @Column({ type: 'int', nullable: true})
    CNPJ :number;

    @Column({ type: 'int', nullable: true})
    CPF :number;

    @Column({ type: 'character varying', length: 10})
    plan_type :string;

    @Column({ type: 'date' })
    dateOfSignature :Date;

    @Column({ type: 'real' })
    planValue :Double;

    @Column({ type: 'date' })
    payday :Date;

    @Column({ type: 'character varying', nullable :true, length: 30})
    state :string;

    @Column({ type: "character varying", nullable :true, length: 30 })
    city :string;

    @Column({type: 'character varying', nullable :true, length: 50 })
    streetName :string;
    
    @Column()
    login :string;

    @Column()
    email :string;

    @Column()
    password :string;

    @Column({ type: 'int', nullable: true })
    phone :number;

    @Column({ type: 'int'})
    CEP :number;

    @OneToMany(() => Student, (student :Student) => student.schoolFamily  )
    students :Student[];

    @OneToMany(()=> Teacher, (teacher :Teacher) => teacher.schoolFamily )
    teachers: Teacher[];
    
    @OneToMany(()=> FamilyMember, ( fm :FamilyMember) => fm.schoolFamily )
    familyMembers :FamilyMember[];
}