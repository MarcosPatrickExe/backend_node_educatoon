import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('schools')
export class School{

    @PrimaryGeneratedColumn() // chave-primaria e auto-incremento
    ID_escola?: string;

    @Column({type: 'char varying'})
    name?: string;

    @Column({type: 'character varying'})
    CNPJ :string;
}