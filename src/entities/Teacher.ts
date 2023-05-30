import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity('teachers')
export class Teacher{

    @PrimaryGeneratedColumn()
    ID_teacher :number;
 
    @Column()
    ID_school :number;

    @Column({ type: 'char varying', length :100 })
    name :string;

    @Column({ type: 'char varying', length :30 })
    discipline :string;
}