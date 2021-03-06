jest.mock('validator', () => ({
  isEmailValid: true,

  isEmail (email) {
    this.email = email
    return this.isEmailValid
  }
}))

const validator = require('validator')
const EmailValidator = require('./email-validator')

const makeSut = () => {
  return new EmailValidator()
}

describe('Email Validator', () => {
  test('Should return true if validator returns true', () => {
    const sut = makeSut()
    const isEmailValid = sut.isValid('email@email.com')
    expect(isEmailValid).toBe(true)
  })

  test('Should return false if validator returns false', () => {
    validator.isEmailValid = false
    const sut = makeSut()
    const isEmailValid = sut.isValid('email@email.com')
    expect(isEmailValid).toBe(false)
  })

  test('Should call validator with correct email', () => {
    const sut = makeSut()
    const email = 'email@email.com'
    sut.isValid(email)
    expect(validator.email).toBe(email)
  })
})
