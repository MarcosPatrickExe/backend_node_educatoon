import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from './Student';


@Entity('doubts')
export class Doubt{

    @PrimaryGeneratedColumn()
    ID_doubt :number;

    @ManyToOne(()=> Student, (student :Student)=> student.doubts  )
    @JoinColumn({name: 'enrollment'})
    student :Student;

    @Column({name: 'doubt', type: 'text'})
    text :string;

    @Column({ type: 'time'})
    time :Date;

    @Column({ type: 'date'})
    date :Date;

//   @Column()
//   ID_student :number;
}








