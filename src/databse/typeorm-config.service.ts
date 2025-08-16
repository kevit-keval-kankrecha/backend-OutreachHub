import { Injectable, Inject } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigType } from '@nestjs/config';
import pg from 'pg';
import databaseConfig from '../config/database.config';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(
    @Inject(databaseConfig.KEY)
    private readonly dbConfig: ConfigType<typeof databaseConfig>,
  ) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      driver: pg,
      url: this.dbConfig.uri,
      entities: [],
      migrations: [],
      synchronize: this.dbConfig.synchronize,
    };
  }
}
