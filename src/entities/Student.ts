import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('students')
export class Students{

    @PrimaryGeneratedColumn()
    ID_student :number;

    @Column()
    ID_school :number;

    @Column({ type: 'char varying', length: 100 })
    name :string;

    @Column({ type: 'char varying', length: 20 })
    login :string;

    @Column({ type: 'char varying', length: 20 })
    password :string;

    @Column({ type: 'int'})
    progress :string;
}



