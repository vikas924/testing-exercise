const capitalize = require('./capitalize')

describe('capitalize', () => {
    it('capitalize1', () => {
        expect(capitalize('friend')).toBe('Friend');
      })

      it('capitalize2', () => {
        expect(capitalize('begin')).toBe('Begin');
      })
    })