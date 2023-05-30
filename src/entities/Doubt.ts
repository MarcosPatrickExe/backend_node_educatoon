import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('doubts')
export class Doubt{

    @PrimaryGeneratedColumn()
    ID_doubt :number;

    @Column()
    ID_student :number;

    @Column({name: 'doubt', type: 'text'})
    text :string;

    @Column({ type: 'time'})
    time :Date;

    @Column({ type: 'date'})
    date :Date;
}








