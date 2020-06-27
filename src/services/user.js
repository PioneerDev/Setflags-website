import request from '@UTILS/request'

export async function auth(code) {
  return request(`/auth?code=${code}`)
}