import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { WorkSpaceModule } from './workspace/workspace.module';
import { WorkSpaceUsersModule } from './workspace-users/workspace-users.module';
import { AuthenticationModule } from '../common/authentication/authentication.module';
import { CommonHttpModule } from '../common/http/http.module';

@Module({
  imports: [
    AuthenticationModule,
    CommonHttpModule,
    UserModule,
    WorkSpaceModule,
    WorkSpaceUsersModule,
  ],
})
export class ComponentModule {}
