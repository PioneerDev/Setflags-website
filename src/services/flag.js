import request from '@UTILS/request'

export async function getFlagList() {
  return request(`/flags`);
}

export async function getEvidenceList(flagid) {
  return request(`/flags/${flagid}/evidences`)
}