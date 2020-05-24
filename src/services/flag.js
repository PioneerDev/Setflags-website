import request from '@/utils/request';
import {baseUrl} from '@/config/baseInfo'

console.log('request---->', request)
console.log('baseUrl---->', baseUrl)

export async function getFakeCaptcha() {
  return request(`${baseUrl}/v2/flags`);
}