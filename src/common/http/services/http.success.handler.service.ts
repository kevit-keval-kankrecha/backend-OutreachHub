import { Injectable } from '@nestjs/common';

interface ICommonSuccessResponse {
  successCode: string;
  data?: any;
  description?: string;
  statusCode?: number;
}

@Injectable()
export class HttpSuccessHandlerService {
  public commonSuccessHandler({
    successCode,
    data = null,
    description = '',
    statusCode = 200,
  }: ICommonSuccessResponse) {
    return {
      successCode,
      data,
      description,
      statusCode,
    };
  }
}
