const request = require('supertest')
const app = require('../config/app')

describe('JSON Parser Middleware', () => {
  it('should parse body as JSON', async () => {
    app.post('/test', (req, res) => res.send(req.body))
    await request(app)
      .post('/test')
      .send({ name: 'test' })
      .expect({ name: 'test' })
  })
})
