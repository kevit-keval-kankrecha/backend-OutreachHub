import { Body, Controller, Post, Res } from '@nestjs/common';
import { ROUTE_NAMESPACES } from '../../config/tokens/route.tokens';
import { Response } from 'express';
import { UserService } from './users.service';

@Controller(ROUTE_NAMESPACES.USERS)
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res() res: Response,
  ) {
    const result = await this.userService.validateUser(email, password);
    return res.send(result);
  }
}
