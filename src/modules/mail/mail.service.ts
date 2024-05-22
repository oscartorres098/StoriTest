import { Injectable } from '@nestjs/common';
import { configSG } from 'env';
import { SendMailDto } from 'src/domain/dto/mail/send-mail.dto';
import RedTemplate from 'src/utils/templates/Red';
const sgMail = require('@sendgrid/mail')
@Injectable()
export class MailService {
  constructor() { }
  getHello(): string {
    return 'Stori Test is running!';
  }
  async sendMail(sendMailDto: SendMailDto): Promise<void> {
    sgMail.setApiKey(configSG.Key)
    let template = RedTemplate(sendMailDto.title, sendMailDto.body, '');
    if(sendMailDto.html==='red'){

    }else if(sendMailDto.html==='green'){

    }
    const msg = {
      to: sendMailDto.to, 
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
}
