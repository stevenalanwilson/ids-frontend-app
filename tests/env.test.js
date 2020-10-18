import dotenv from 'dotenv'
dotenv.config()

describe('env', () => {
  test('NODE_ENV', () => {
    expect(process.env.NODE_ENV).toBeDefined()
  })
  test('SPACEID', () => {
    expect(process.env.SPACEID).toBeDefined()
  })
  test('ACCESSTOKEN', () => {
    expect(process.env.ACCESSTOKEN).toBeDefined()
  })
})
