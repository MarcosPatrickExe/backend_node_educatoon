import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeSchoolFamilyColumns1685581276373 implements MigrationInterface {
    name = 'ChangeSchoolFamilyColumns1685581276373'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schools_families" DROP COLUMN "CNPJ"`);
        await queryRunner.query(`ALTER TABLE "schools_families" ADD "CNPJ" bigint`);
        await queryRunner.query(`ALTER TABLE "schools_families" DROP COLUMN "CPF"`);
        await queryRunner.query(`ALTER TABLE "schools_families" ADD "CPF" bigint`);
        await queryRunner.query(`ALTER TABLE "schools_families" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "schools_families" ADD "phone" bigint`);
        await queryRunner.query(`ALTER TABLE "schools_families" DROP COLUMN "CEP"`);
        await queryRunner.query(`ALTER TABLE "schools_families" ADD "CEP" bigint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schools_families" DROP COLUMN "CEP"`);
        await queryRunner.query(`ALTER TABLE "schools_families" ADD "CEP" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schools_families" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "schools_families" ADD "phone" integer`);
        await queryRunner.query(`ALTER TABLE "schools_families" DROP COLUMN "CPF"`);
        await queryRunner.query(`ALTER TABLE "schools_families" ADD "CPF" integer`);
        await queryRunner.query(`ALTER TABLE "schools_families" DROP COLUMN "CNPJ"`);
        await queryRunner.query(`ALTER TABLE "schools_families" ADD "CNPJ" integer`);
    }

}
