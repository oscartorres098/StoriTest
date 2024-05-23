import { Injectable } from '@nestjs/common';
import { CreatePresetDto, Preset, Attatch } from '../../domain';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PresetService {
  
  constructor(
    @InjectRepository(Preset)
    private presetRepository: Repository<Preset>,
    @InjectRepository(Attatch)
    private attachmentRepository: Repository<Attatch>,
  ) { }
  async create(createPresetDto: CreatePresetDto) {
    try {
      const preset = this.presetRepository.create({
        html: createPresetDto.html,
        subject: createPresetDto.subject,
        body: createPresetDto.body,
        title: createPresetDto.title,
      });
  
      const resultPreset = await this.presetRepository.save(preset);
  
      for (const file of createPresetDto.files) {
        
      }
  
      return resultPreset;
    } catch (e) {
      console.log(e)
      return e;
    }
  }

  async findAll() {
    return await this.presetRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

}
