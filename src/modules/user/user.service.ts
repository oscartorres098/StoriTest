import { Injectable } from '@nestjs/common';
import { CreateUserDto, User, UpdateUserDto } from '../../domain';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    //private readonly validator: Validator,
  ) { }
  async create(createUsertDto: CreateUserDto) {
    try {
      const user = await this.userRepository.create({
        email: createUsertDto.email,
        name: createUsertDto.name,

      });

      console.log("studio", user)
      const resultUser = await this.userRepository.save(user);
      return resultUser;
    } catch (e) {
      console.log(e)
      return e;
    }
  }

  async delete(deleteUserDto) {
    return await this.userRepository.delete({email: deleteUserDto.id});
  }

  async findAll() {
    return await this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
