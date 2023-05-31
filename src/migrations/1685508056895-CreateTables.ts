import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1685508056895 implements MigrationInterface {
    name = 'CreateTables1685508056895'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teachers" ("ID_teacher" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "discipline" character varying(30) NOT NULL, "ID_school_family" integer, CONSTRAINT "PK_7e868912f29626649abcc2a5845" PRIMARY KEY ("ID_teacher"))`);
        await queryRunner.query(`CREATE TABLE "family_members" ("ID_family_member" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "progress" integer NOT NULL, "ID_school_family" integer, CONSTRAINT "PK_241af8eb7a993a693bed907949a" PRIMARY KEY ("ID_family_member"))`);
        await queryRunner.query(`CREATE TABLE "schools_families" ("ID_school_family" SERIAL NOT NULL, "name" character varying(80) NOT NULL, "CNPJ" integer, "CPF" integer, "plan_type" character varying(10) NOT NULL, "dateOfSignature" date NOT NULL, "planValue" real NOT NULL, "payday" date NOT NULL, "state" character varying(30), "city" character varying(30), "streetName" character varying(50), "login" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "phone" integer, "CEP" integer NOT NULL, CONSTRAINT "PK_a43bc5ea1c42883fba57802b55c" PRIMARY KEY ("ID_school_family"))`);
        await queryRunner.query(`CREATE TABLE "students" ("enrollment" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "progress" integer NOT NULL, "ID_school_family" integer, CONSTRAINT "PK_add6980c10c504b39a7fda35916" PRIMARY KEY ("enrollment"))`);
        await queryRunner.query(`CREATE TABLE "doubts" ("ID_doubt" SERIAL NOT NULL, "doubt" text NOT NULL, "time" TIME NOT NULL, "date" date NOT NULL, "enrollment" integer, CONSTRAINT "PK_0f27f6b73c20695f4e395421c4e" PRIMARY KEY ("ID_doubt"))`);
        await queryRunner.query(`ALTER TABLE "teachers" ADD CONSTRAINT "FK_0c798adbee8bc7bcb892e203dec" FOREIGN KEY ("ID_school_family") REFERENCES "schools_families"("ID_school_family") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "family_members" ADD CONSTRAINT "FK_caa2d34d18577bcaa689ed42221" FOREIGN KEY ("ID_school_family") REFERENCES "schools_families"("ID_school_family") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "FK_d5efad0eafda7b6f7d3fe6e5074" FOREIGN KEY ("ID_school_family") REFERENCES "schools_families"("ID_school_family") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "doubts" ADD CONSTRAINT "FK_1e3075b78ba598a299bcafa0b28" FOREIGN KEY ("enrollment") REFERENCES "students"("enrollment") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doubts" DROP CONSTRAINT "FK_1e3075b78ba598a299bcafa0b28"`);
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "FK_d5efad0eafda7b6f7d3fe6e5074"`);
        await queryRunner.query(`ALTER TABLE "family_members" DROP CONSTRAINT "FK_caa2d34d18577bcaa689ed42221"`);
        await queryRunner.query(`ALTER TABLE "teachers" DROP CONSTRAINT "FK_0c798adbee8bc7bcb892e203dec"`);
        await queryRunner.query(`DROP TABLE "doubts"`);
        await queryRunner.query(`DROP TABLE "students"`);
        await queryRunner.query(`DROP TABLE "schools_families"`);
        await queryRunner.query(`DROP TABLE "family_members"`);
        await queryRunner.query(`DROP TABLE "teachers"`);
    }

}
