import { registerAs } from '@nestjs/config';
import { ENV_NAMESPACES } from './config.tokens';

export default registerAs(ENV_NAMESPACES.DATABASE, () => ({
  uri: process.env.DATABASE_URL,
  synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
}));
