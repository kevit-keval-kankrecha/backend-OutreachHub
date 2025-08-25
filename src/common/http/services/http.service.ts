import { Injectable } from '@nestjs/common';
import {
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
  // eslint-disable-next-line import/no-named-default
  default as axios,
} from 'axios';

@Injectable()
export class HttpService {
  request<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return axios(config);
  }

  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return axios.get(url, config);
  }

  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return axios.delete(url, config);
  }

  head<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return axios.head(url, config);
  }

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return axios.post(url, data, config);
  }

  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return axios.put(url, data, config);
  }

  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return axios.patch(url, data, config);
  }
}
