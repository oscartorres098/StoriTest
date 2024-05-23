import { IsString } from 'class-validator';

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class List {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  id: string;

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

}
