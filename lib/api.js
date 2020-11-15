import { createClient } from 'contentful'
import config from'../config'

const client = createClient({
  space: config.space,
  accessToken: config.accessToken
})

export async function getAllServices() {
  const entries = await client.getEntries({
    content_type: 'service'
  })
  return entries
}


export async function getAllSectors() {
  const entries = await client.getEntries({
    content_type: 'sector'
  })
  return entries
}

export async function getAllCaseStuies() {
  const entries = await client.getEntries({
    content_type: 'caseStudy'
  })
  console.log(entries.items[0].fields.casestudyService.sys.id)
  return entries
}

export async function getCaseStuiesByService(serviceId) {
  const entries = await client.getEntries({
    content_type: 'caseStudy',
    'fields.casestudyService.sys.id': serviceId

  })
  return entries
}

export async function getCaseStuiesBySectors(sectorId) {
  const entries = await client.getEntries({
    content_type: 'sector',
    'fields.casestudyService.sys.id': sectorId

  })
  return entries
}


export async function getAllClients() {
  const entries = await client.getEntries({
    content_type: 'client'
  })
  return entries
}

export async function getAServiceByID(entry_id) {
  const service = await client.getEntry(entry_id)
  return service
}

export async function getASectorByID(entry_id) {
  const sector = await client.getEntry(entry_id)
  return sector
}