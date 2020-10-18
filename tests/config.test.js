import config from '../config'

describe('env', () => {
  test('appName to be definded', () => {
    expect(config.appName).toBeDefined()
  })
  test('space to be definded', () => {
    expect(config.space).toBeDefined()
  })
  test('access token to be definded', () => {
    expect(config.accessToken).toBeDefined()
  })
})
