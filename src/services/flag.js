import request from '@UTILS/request'

export async function getFlagList(params) {
  const {current_page,page_size} = params
  return request(`/flags?current_page=${current_page}&page_size=${page_size}`);
}

export async function getEvidenceList(flagid) {
  return request(`/flags/${flagid}/evidences?period=0`)
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
  return request(`/flags/${flagid}/${op}`,{
    method:'PUT'
  })
}

export async function uploadEvidence(params) {
  const {flagid, type, file} = params
  return request(`/attachments?type=${type}&flag_id=${flagid}`,{
    method: 'POST',
    data: file
  })
}

export async function getFlagDetail(params) {
  return request(`/flag/detail?flag_id=${params}`)
}

export async function getMyflagList() {
  return request(`/myflags`)
}