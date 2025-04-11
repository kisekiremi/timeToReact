import { fetchAPI } from '../index'

const url_visitTime = `https://api.kisekiremi.moe/api/visit`
export async function readVisitTime() {
  return fetchAPI(url_visitTime, 'GET')
}

export async function writeVisitTime() {
  return fetchAPI(url_visitTime, 'POST')
}
