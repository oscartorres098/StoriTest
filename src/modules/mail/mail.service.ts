import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { configSG } from 'env';
import { UserByList, User } from 'src/domain';
import { SendMailDto } from 'src/domain/dto/mail/send-mail.dto';
import { RedTemplate } from 'src/utils/templates';
import { WelcomeTemplate } from 'src/utils/templates';
import { Repository } from 'typeorm';

const sgMail = require('@sendgrid/mail')
@Injectable()
export class MailService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(UserByList)
    private listRepository: Repository<UserByList>,
    //private readonly validator: Validator,
  ) { }

  async sendMail(sendMailDto: SendMailDto): Promise<void> {

    const list = await this.listRepository.find({ where: { listId:  sendMailDto.to} });
    const users = await Promise.all(list.map(async (el)=>{
      const user = await this.userRepository.findOne({ where: { id:  el.userId} });
      return user.email
    }))

    const to = await this.userRepository.find({});
    sgMail.setApiKey(configSG.Key)

    let template = RedTemplate(sendMailDto.title, sendMailDto.body, 'http://localhost:3000/unsuscribe');

    const msg = {
      to: users, 
      from: 'osdator98@gmail.com', 
      subject: sendMailDto.subject,
      html: template,
      attachments: sendMailDto.attachments,
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error.response.body)
      })

  }

  async sendWelcomeMail(sendMailDto: SendMailDto): Promise<void> {
    sgMail.setApiKey(configSG.Key)
    const html = WelcomeTemplate('');
    console.log(html)
    const msg = {
      to: sendMailDto.to, 
      from: 'osdator98@gmail.com', 
      subject: sendMailDto.subject,
      html: html,
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error.response.body)
      })

  }
}
