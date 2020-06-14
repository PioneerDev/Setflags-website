import request from '@UTILS/request'

export async function getFlagList() {
  return request(`/flags`);
}