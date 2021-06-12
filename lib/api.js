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
  return entries
}

export async function getCaseStuiesByService(serviceId) {
  const entries = await client.getEntries({
    content_type: 'caseStudy',
    'fields.casestudyService.sys.id': serviceId

  })
  return entries
}

export async function getCaseStuiesBySector(sectorId) {
  const entries = await client.getEntries({
    content_type: 'caseStudy',
    'fields.casestudySector.sys.id': sectorId

  })
  return entries
}


export async function getAllClients() {
  const entries = await client.getEntries({
    content_type: 'client'
  })
  return entries
}


/* Group these */

export async function getAServiceByID(entry_id) {
  const service = await client.getEntry(entry_id)
  return service
}

export async function getASectorByID(entry_id) {
  const sector = await client.getEntry(entry_id)
  return sector
}

export async function getACaseSudyByID(entry_id) {
  const casestudy = await client.getEntry(entry_id)
  return casestudy
}

/* Group these */

export async function searchCaseStuies(id, category) {
  if (category === 'service') {
   return await client.getEntries({
      content_type: 'caseStudy',
      'fields.casestudyService.sys.id': id
  
    })
  }
  if (category === 'sector') {
    return await client.getEntries({
      content_type: 'caseStudy',
      'fields.casestudySector.sys.id': id
  
    })
  }
}