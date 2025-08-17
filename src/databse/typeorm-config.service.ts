import { Injectable, Inject } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigType } from '@nestjs/config';
import pg from 'pg';
import databaseConfig from '../config/config-list/database.config';
import { User } from '../component/users/entity/users.entity';
import { Workspace } from '../component/workspace/entity/workspace.entity';
import { WorkspaceUser } from '../component/workspace-users/entity/workspace-users.entity';

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
      entities: [User, Workspace, WorkspaceUser],
      migrations: [],
      synchronize: this.dbConfig.synchronize,
    };
  }
}
