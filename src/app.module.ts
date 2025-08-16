import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './databse/typeorm-config.service';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load:[
        databaseConfig
      ]
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
