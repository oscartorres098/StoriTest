import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { ListController } from './list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List, UserByList } from '../../domain';

@Module({
  controllers: [ListController],
  providers: [ListService],
  imports: [
    TypeOrmModule.forFeature([List, UserByList]),
  ],
})
export class ListModule { }
