import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from './entity/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { HttpSuccessHandlerService } from '../../common/http/services/http.success.handler.service';
import { USER_CODES, USER_MESSAGES } from './tokens/users.tokens';
import { AuthenticationService } from '../../common/authentication/authentication.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly httpSuccessHandler: HttpSuccessHandlerService,
    private readonly authenticationService: AuthenticationService
  ) {}
  async validateUser(email: string, password: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      select: ['id', 'email', 'name', 'password'],
    });

    if (!user) {
      throw new UnauthorizedException({
        message: USER_MESSAGES.INVALID_CREDENTIALS,
        errorCode: USER_CODES.USER_LOGIN_FAILED,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException({
        message: USER_MESSAGES.INVALID_CREDENTIALS,
        errorCode: USER_CODES.USER_LOGIN_FAILED,
      });
    }

    delete user.password;

    const token = this.authenticationService.generateToken({
      id:user.id,
      email:user.email,
      createdAt:new Date()
    })
    return this.httpSuccessHandler.commonSuccessHandler({
      successCode: USER_CODES.USER_LOGIN_SUCCESS,
      data: {
        ...user,
        token
      },
      description: USER_MESSAGES.USER_LOGIN_SUCCESS,
    });
  }
}
