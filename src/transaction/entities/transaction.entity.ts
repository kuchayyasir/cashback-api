import { ObjectIdColumn, ObjectID, Column, Double, Entity } from 'typeorm';
@Entity('transactions')
export class Transaction {
  @ObjectIdColumn() tid: ObjectID;
  @Column({ type: 'date' }) date: Date;
  @Column({ type: 'number' }) customerId: Number;
  @Column({ type: 'number' }) id: Number;
}
