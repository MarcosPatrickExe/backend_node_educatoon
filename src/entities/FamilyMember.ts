import { Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SchoolFamily } from './SchoolFamily';


@Entity('family_members')
export class FamilyMember{

    @PrimaryGeneratedColumn()
    IDfamilyMember :number;

    @ManyToOne(()=> SchoolFamily, (cf :SchoolFamily) => cf.familyMembers )
    @JoinColumn({ name:'ID_school_family' })
    schoolFamily :SchoolFamily;

    @Column({type: 'char varying', length: 100 })
    name :string;

    @Column({type :'int'})
    progress :number;
}