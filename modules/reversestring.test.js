const reversedstring = require('./reversestring')

describe('reversestring', () => {
    it('reversestring', () => {
        expect(reversedstring('friend')).toBe('dneirf');
      })
    })