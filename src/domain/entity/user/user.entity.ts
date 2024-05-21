import { IsString } from 'class-validator';

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  id: string;

  @Column('text', {unique: true})
  @IsString()
  email: string;

  @Column('text')
  @IsString()
  name: string;

  @Column({
    nullable: true,
    default: new Date()
  })
  @IsString()
  createdAt: Date;

  @Column({
    nullable: true,
    default: new Date()
  })
  @IsString()
  updatedAt: Date;

  /*
  @ManyToOne(() => Studio, (studio) => studio.bankAccounts)
  studio: Studio;

  @ManyToOne(() => Models, (model) => model.BankAccount)
  model: Models;

  @OneToMany(() => Withdrawal, withdrawal => withdrawal.bankAccount)
  withdrawal: Withdrawal[] */
}
