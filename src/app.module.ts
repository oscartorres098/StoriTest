import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './middlewares';
import { configDB } from 'env';
import { readFileSync } from 'fs';
import { join } from 'path';
import { UserModule } from './modules/user/user.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomConfigModule } from './modules/config/custom-config.module';
import { HealthModule } from './Modules/health';
import { MailModule } from './modules/mail/mail.module';
 
@Module({
  imports: [
    UserModule, HealthModule, MailModule,
    CustomConfigModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: configDB.DB_SYNC,
      migrationsRun: true,
      migrations: ['/migrations/*{.ts,.js}'],
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrationsTableName: '_migrations',

      synchronize: configDB.ENVIROMENT === "prod" ? false : true,
      logging: true,
      ...(configDB.ENVIROMENT === "prod" ? {
        ssl: {
          ca: readFileSync(join(process.cwd(), 'assets', 'us-east-1-bundle.pem')).toString(),
        }
      } : {}),
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('/platforms');
  }
}