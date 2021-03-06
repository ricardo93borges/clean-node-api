const bcrypt = require('bcrypt')
const MissingParamError = require('../errors/missing-param-error')

class Encrypter {
  async compare (value, hash) {
    if (!value) {
      throw new MissingParamError('value')
    }
    if (!hash) {
      throw new MissingParamError('hash')
    }
    return await bcrypt.compare(value, hash)
  }
}

module.exports = Encrypter
