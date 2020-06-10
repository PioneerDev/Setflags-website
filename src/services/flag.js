import request from '@UTILS/request'
import baseInfo from '@CONFIG/baseInfo'

const { baseUrl } = baseInfo

export async function getFlagList() {
  return request(`${baseUrl}/flags`);
}

export async function uploadFlags() {
  return request(`${baseUrl}/flag`)
}