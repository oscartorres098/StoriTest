import { IsString } from 'class-validator';

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Preset {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  id: string;

  @Column('text')
  @IsString()
  subject: string;

  @Column('text')
  @IsString()
  html: string;

  @Column('text')
  @IsString()
  title: string;

  @Column('text')
  @IsString()
  body: string;

  @Column('text')
  @IsString()
  idList: string;


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
