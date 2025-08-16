import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './databse/typeorm-config.service';
import databaseConfig from './config/config-list/database.config';
import { ComponentModule } from './component/component.module';
import serverConfig from './config/config-list/server.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load:[
        databaseConfig,
        serverConfig
      ]
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    ComponentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
