import request from '@UTILS/request'

export async function getFlagList() {
  return request(`/flags`);
}

export async function getEvidenceList(flagid) {
  return request(`/flags/${flagid}/evidences`)
}

export async function getWitnessList(flagid) {
  return request(`/flags/${flagid}/witnesses`)
}

export async function newFlag(params) {
  return request('/flag',{
    method: 'POST',
    data: params
  })
}

export async function opFlag(params) {
  const {flagid, op} = params
  return request(`/flags/${flagid}/${op}`)
}