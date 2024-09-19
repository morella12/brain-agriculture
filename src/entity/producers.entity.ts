import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Crops } from '../interfaces/ProducersInterfaces';

@Entity('producers')
export class Producer {
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @Column({ type: 'varchar', unique: true })
 documentId: string;

 @Column({ type: 'varchar' })
 nameProducer: string;

 @Column({ type: 'varchar' })
 nameFarm: string;

 @Column({ type: 'varchar' })
 city: string;

 @Column({ type: 'varchar' })
 state: string;

 @Column({ type: 'decimal' })
 totalArea: number;

 @Column({ type: 'decimal' })
 arableArea: number;

 @Column({ type: 'decimal' })
 vegetationArea: number;

 @Column({ type: 'enum', enum: Crops, array: true })
 cultivatedCrops: string[];
}