import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MailService } from './mail.service';
import { SendMailDto } from 'src/domain/dto/mail/send-mail.dto';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('')
  async sendMail(@Body() sendMailDto: SendMailDto): Promise<void>{
    await this.mailService.sendMail(sendMailDto);
  }

  @Post('welcome')
  async sendMailWelcome(@Body() sendMailDto: SendMailDto): Promise<void>{
    await this.mailService.sendWelcomeMail(sendMailDto);
  }
}
