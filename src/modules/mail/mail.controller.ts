import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get('')
  async sendMail(): Promise<void>{
    await this.mailService.sendMail();
  }
}