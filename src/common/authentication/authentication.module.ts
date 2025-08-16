import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({})],
  providers: [AuthenticationService],
  exports: [],
})
export class AuthenticationModule {}
