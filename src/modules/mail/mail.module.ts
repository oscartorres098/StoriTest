import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../domain';
import { MailerModule } from '@nestjs-modules/mailer';


@Module({
  controllers: [MailController],
  providers: [MailService],
  imports: [
    TypeOrmModule.forFeature([User]), MailerModule
  ],
})
export class MailModule { }
