import request from '@UTILS/request'
import baseInfo from '@CONFIG/baseInfo'

const { baseUrl } = baseInfo

console.log('baseInfo', baseInfo)
console.log('request---->', request)
console.log('baseUrl---->', baseUrl)

export async function getFlagList() {
  return request(`${baseUrl}/flags`);
}