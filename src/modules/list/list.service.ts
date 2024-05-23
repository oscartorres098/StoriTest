import { Injectable } from '@nestjs/common';
import { CreateListDto, List, UserByList } from '../../domain';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ListService {
  
  constructor(
    @InjectRepository(List)
    private listRepository: Repository<List>,
    @InjectRepository(UserByList)
    private userByListRepository: Repository<UserByList>,
  ) { }
  async create(createListDto: CreateListDto) {
    try {
      const list = this.listRepository.create({
        name: createListDto.name,
        
      });

      const resultPreset = await this.listRepository.save(list);

      for (const user of createListDto.mails) {
        const attachment = this.userByListRepository.create({
          listId: resultPreset.id,
          userId: user,
        });

        await this.userByListRepository.save(attachment);
      }

      return resultPreset;
    } catch (e) {
      console.log(e)
      return e;
    }
    
  }

  async findAll() {
    return await this.listRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

}
