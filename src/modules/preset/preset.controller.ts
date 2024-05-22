import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PresetService } from './preset.service';
import { CreatePresetDto } from '../../domain';

import { User } from '../../domain';

@Controller('preset')
export class PresetController {
  constructor(private readonly presetService: PresetService) { }

  @Post()
  create(@Body() createPresetDto: CreatePresetDto) {
    return this.presetService.create(createPresetDto);
  }

  @Get()
  findAll() {
    return this.presetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.presetService.findOne(+id);
  }

}

