const request = require('supertest')
const app = require('./app')

describe('Setup', () => {
  it('should disable x-powered-by header', async () => {
    app.get('/test', (req, res) => res.send(''))
    const res = await request(app).get('/test')
    expect(res.headers['x-powered-by']).toBeUndefined()
  })
})
