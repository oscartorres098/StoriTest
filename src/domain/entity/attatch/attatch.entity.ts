import { IsString } from 'class-validator';

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Attatch {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  id: string;

  @Column('text', {unique: true})
  @IsString()
  filename: string;

  @Column('text', {unique: true})
  @IsString()
  content: string;

  @Column('text')
  @IsString()
  disposition: string;

  @Column('text')
  @IsString()
  presetId: string;

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
