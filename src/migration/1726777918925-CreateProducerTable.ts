import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProducerTable1726777918925 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "producers",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
          },
          {
            name: "documentId",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "nameProducer",
            type: "varchar",
          },
          {
            name: "nameFarm",
            type: "varchar",
          },
          {
            name: "city",
            type: "varchar",
          },
          {
            name: "state",
            type: "varchar",
          },
          {
            name: "totalArea",
            type: "decimal",
          },
          {
            name: "arableArea",
            type: "decimal",
          },
          {
            name: "vegetationArea",
            type: "decimal",
          },
          {
            name: "cultivatedCrops",
            type: "enum",
            enum: ["SOJA", "MILHO", "ALGODAO", "CAFE", "CANADEACUCAR"],
            isArray: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("producers");
  }
}
