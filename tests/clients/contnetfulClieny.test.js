import contentfulClient from '../../clients/contentfulClient'
import config from '../../config'

describe('Ensure contentful client is initialized', () => {
  test('Client has getentries() method', () => {
    const client = contentfulClient(config)
    expect(client).toHaveProperty('getEntries')
  })
})
