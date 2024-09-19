import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Producer } from './entity/producers.entity';

config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.URL_DB,
  synchronize: false,
  logging: true,
  entities: [Producer],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
});
