const stringlength = require('./stringLength')

describe('stringthlength', () => {
it('stringlength', () => {
    expect(stringlength('friend')).toBe(6);
  })

  it('stringlength', () => {
    expect (() => {(stringlength(''))}).toThrow('String is not valid');
  })

  it('stringlength', () => {
    expect (() => {(stringlength('Hello my friend'))}).toThrow('String is too long');
  })
})