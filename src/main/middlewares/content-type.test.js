const request = require('supertest')
const app = require('../config/app')

describe('Content-Type Middleware', () => {
  it('should return json content-type as default', async () => {
    app.get('/test', (req, res) => res.send(''))

    await request(app)
      .get('/test')
      .expect('content-type', /json/)
  })

  it('should return xml content-type if forced', async () => {
    app.get('/test_2', (req, res) => {
      res.type('xml')
      res.send('')
    })

    await request(app)
      .get('/test_2')
      .expect('content-type', /xml/)
  })
})
