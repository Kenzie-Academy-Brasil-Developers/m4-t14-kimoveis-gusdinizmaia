import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterRealEstates1678292524870 implements MigrationInterface {
    name = 'AlterRealEstates1678292524870'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" DROP DEFAULT`);
    }

}
