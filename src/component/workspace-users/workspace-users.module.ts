import { Module } from '@nestjs/common';
import { WorkSpaceUserController } from './workspace-users.controller';

@Module({
  imports: [],
  controllers: [WorkSpaceUserController],
  providers: [],
  exports: [],
})
export class WorkSpaceUsersModule {}