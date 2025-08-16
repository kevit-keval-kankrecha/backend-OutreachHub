import { Inject, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import serverConfig from '../../config/config-list/server.config';

@Injectable()
export class AuthenticationService {
  private readonly logger = new Logger(AuthenticationService.name);

  constructor(
    @Inject(serverConfig.KEY)
    private readonly serverConfigurations: ConfigType<typeof serverConfig>,
    private readonly jwtService: JwtService,
  ) {}

  verifyToken(token: string): any {
    try {
      return this.jwtService.verify(token, {
        algorithms: [
          this.serverConfigurations.jwtAuthentication.signOptions.algorithm,
        ],
        publicKey:
          this.serverConfigurations.jwtAuthentication.publicKeyToVerifyJWT,
      });
    } catch (err) {
      this.logger.error({ err }, `JWT - Auth-Token verification error`);
      throw err;
    }
  }

  decodeToken(token: string): any {
    try {
      return this.jwtService.decode(token);
    } catch (err) {
      this.logger.error({ err }, `JWT - Auth-Token is not valid`);
      return null;
    }
  }
}
