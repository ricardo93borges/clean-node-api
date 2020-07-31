const LoginRouterComposer = require('../composers/login-router-composer')
const ExpressRouterAdapter = require('../adapters/express-router-adapter')
const loginRouter = require('../composers/login-router-composer')

module.exports = router => {
  router.post('/login', ExpressRouterAdapter.adapt(loginRouter))
}
