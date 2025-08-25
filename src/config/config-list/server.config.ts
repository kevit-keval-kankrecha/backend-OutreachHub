import { registerAs } from '@nestjs/config';
import { ENV_NAMESPACES } from '../tokens/config.tokens';
import { Algorithm } from 'jsonwebtoken';

export default registerAs(ENV_NAMESPACES.SERVER, () => {
  return {
    port: parseInt(process.env.PORT, 10) || 4518,
    host: process.env.HOST || '127.0.0.1',
    urlPrefix: process.env.URL_PREFIX || 'v2',
    cors: {
      // Change origin to "*" for local
      origin: process.env?.CORS_ORIGIN?.split(',') || [],
      allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Accept',
        'Content-Type',
        'Authorization',
        'x-verification-signature',
      ],
      methods: ['GET', 'PUT', 'OPTIONS', 'POST', 'DELETE', 'PATCH'],
    },
    jwtAuthentication: {
      privateKeyToSignJWT: Buffer.from(process.env.PRIVATE_KEY, 'base64').toString('utf8'),
      publicKeyToVerifyJWT: Buffer.from(process.env.PUBLIC_KEY, 'base64').toString('utf8'),
      signOptions: {
        algorithm: 'RS256' as Algorithm,
        expiresIn: process.env.JWT_EXPIRES_IN ?? '24h'
      },
      customTTL: {
        authTokenTTL: parseInt(process.env.AUTH_TOKEN_TTL || '24', 10) * 60 * 60,
      },
    },
  };
});
