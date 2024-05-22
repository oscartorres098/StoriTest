import { Module } from '@nestjs/common';
import { PresetService } from './preset.service';
import { PresetController } from './preset.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attatch, Preset } from '../../domain';

@Module({
  controllers: [PresetController],
  providers: [PresetService],
  imports: [
    TypeOrmModule.forFeature([Preset, Attatch]),
  ],
})
export class PresetModule { }
