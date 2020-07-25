const bcrypt = require('bcrypt')
const Encrypter = require('./encrypter')
const MissingParamError = require('../errors/missing-param-error')

const makeSut = () => {
  return new Encrypter()
}

describe('Encrypter', () => {
  test('Should return true if bcrypt returns true', async () => {
    const sut = makeSut()
    const isvalid = await sut.compare('value', 'hash')
    expect(isvalid).toBe(true)
  })

  test('Should return false if bcrypt returns false', async () => {
    const sut = makeSut()
    bcrypt.isValid = false
    const isvalid = await sut.compare('value', 'hash')
    expect(isvalid).toBe(false)
  })

  test('Should return bcrypt with correct values', async () => {
    const sut = makeSut()
    const value = 'value'
    const hash = 'hash'
    await sut.compare(value, hash)
    expect(bcrypt.value).toBe(value)
    expect(bcrypt.hash).toBe(hash)
  })

  test('Should throw if no params are provided', async () => {
    const sut = makeSut()
    expect(sut.compare()).rejects.toThrow(new MissingParamError('value'))
    expect(sut.compare('value')).rejects.toThrow(new MissingParamError('hash'))
  })
})
