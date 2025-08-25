import { Module } from '@nestjs/common';
import { HttpService, HttpSuccessHandlerService } from './services';

@Module({
  providers: [HttpService, HttpSuccessHandlerService],
  exports: [HttpService, HttpSuccessHandlerService],
})
export class CommonHttpModule {}
