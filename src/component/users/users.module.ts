import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/users.entity';
import { CommonHttpModule } from 'src/common/http/http.module';
import { AuthenticationModule } from 'src/common/authentication/authentication.module';

@Module({
  imports: [CommonHttpModule,AuthenticationModule,TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController],
  exports: [],
})
export class UserModule {}
