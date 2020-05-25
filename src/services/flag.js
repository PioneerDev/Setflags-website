import request from '@UTILS/request';
import {baseUrl} from '@CONFIG/baseInfo'

console.log('request---->', request)
console.log('baseUrl---->', baseUrl)

export async function getFlagList() {
  return request(`${baseUrl}/v2/flags`);
}