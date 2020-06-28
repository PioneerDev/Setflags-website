import request from '@UTILS/request'

export async function getAssets() {
  return request(`/assets`)
}