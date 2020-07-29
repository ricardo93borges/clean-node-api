const request = require('supertest')

describe('Content-Type Middleware', () => {
  let app

  beforeEach(() => {
    jest.resetModules()
    app = require('../config/app')
  })

  it('should return json content-type as default', async () => {
    app.get('/test', (req, res) => res.send(''))

    await request(app)
      .get('/test')
      .expect('content-type', /json/)
  })

  it('should return xml content-type if forced', async () => {
    app.get('/test', (req, res) => {
      res.type('xml')
      res.send('')
    })

    await request(app)
      .get('/test')
      .expect('content-type', /xml/)
  })
})
