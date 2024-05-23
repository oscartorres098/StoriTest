import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, UserByList } from '../../domain';
import { MailerModule } from '@nestjs-modules/mailer';


@Module({
  controllers: [MailController],
  providers: [MailService],
  imports: [
    TypeOrmModule.forFeature([User, UserByList]), MailerModule
  ],
})
export class MailModule { }
