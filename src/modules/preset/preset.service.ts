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
        subject: createPresetDto.subject,
        body: createPresetDto.body,
        title: createPresetDto.title,
        idList: createPresetDto.list,
        html: createPresetDto.html,

      });

      const resultPreset = await this.presetRepository.save(preset);

      for (const file of createPresetDto.files) {
        const binaryData = Buffer.from(file.content, 'base64') ;
        const attachment = this.attachmentRepository.create({
          filename: file.filename,
          content: binaryData,
          disposition: 'attachment',
          presetId: resultPreset.id,
        });

        await this.attachmentRepository.save(attachment);
      }

      return resultPreset;
    } catch (e) {
      console.log(e)
      return e;
    }
  }

  async findAll() {
    const presets = await this.presetRepository.find();
    const files = await Promise.all(presets.map(async (preset) => {
      const files = await this.attachmentRepository.find(
        { where: { presetId: preset.id } }
      );
      const files64 =files.map((file)=>{
        const base64Data = file.content.toString('base64');
        return {filename: file.filename, content: base64Data}
      })
      
      return { ...preset, files: files64 }
    }))
    return files;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

}
