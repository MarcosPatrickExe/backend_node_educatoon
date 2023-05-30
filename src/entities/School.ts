import { Column, Double, Entity, IsNull, PrimaryGeneratedColumn } from "typeorm";


@Entity('schools')
export class School{

    @PrimaryGeneratedColumn() // chave-primaria e auto-incremento
    ID_school: number;

    @Column({ type: 'char varying', length :80})
    name: string;

    @Column({ type: 'int'})
    CNPJ :number;

    @Column({ type: 'char varying', nullable :true, length: 30})
    state :string;

    @Column({ type: "char varying", nullable :true, length: 30 })
    city :string;

    @Column({type: 'char varying', nullable :true, length: 50 })
    streetName :string;
    
    @Column()
    login :string;

    @Column()
    email :string;

    @Column()
    password :string;

    @Column({ type: 'date' })
    dateOfSignature :Date;

    @Column({ type: 'real' })
    planValue :Double;

    @Column({ type: 'date' })
    payday :Date;

    @Column({ type: 'int' })
    phone :number;
}