import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { WorkSpaceModule } from './workspace/workspace.module';
import { WorkSpaceUsersModule } from './workspace-users/workspace-users.module';
import { AuthenticationModule } from '../common/authentication/authentication.module';

@Module({
  imports: [UserModule, WorkSpaceModule, WorkSpaceUsersModule,AuthenticationModule],
})
export class ComponentModule {}
