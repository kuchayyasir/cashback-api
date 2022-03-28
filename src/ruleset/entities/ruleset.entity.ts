import { Double } from 'mongodb';
import {
  ObjectIdColumn,
  ObjectID,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('rulesets')
export class Ruleset {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id: ObjectID;
  @Column({ type: 'date' }) startDate: Date;
  @Column({ type: 'date' }) endDate: Date;
  @Column({ type: 'number' }) cashback: Double;
  @Column({ type: 'number' }) redemptionLimit: Number;
  @Column({ type: 'number' }) minTransactions: Number;
  @Column({ type: 'number' }) budget: Double;
}
