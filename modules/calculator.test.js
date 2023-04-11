const calculator = require('./calculator');

describe('calculator', () => {
    const test1 = new calculator(3,6);
    const test2 = new calculator(10,2);
    const test3 = new calculator(2,0);

    describe('add', () => {
        it('add1', () => {
        expect(test1.add()).toBe(9);
      })

      it('add2', () => {
        expect(test2.add()).toBe(12);
      })

      it('add3', () => {
        expect(test3.add()).toBe(2);
      })
    })

    describe('subtract', () => {
        it('subtract1', () => {
        expect(test1.subtract()).toBe(-3);
      })

      it('subtract2', () => {
        expect(test2.subtract()).toBe(8);
      })

      it('subtract3', () => {
        expect(test3.subtract()).toBe(2);
      })
    })

    describe('divide', () => {
        it('divide1', () => {
        expect(test1.divide()).toBe(0.5);
      })

      it('divide2', () => {
        expect(test2.divide()).toBe(5);
      })

      it('divide3', () => {
        expect (() => {(test3.divide())}).toThrow('Cannot divide by zero');
      })
    })

    describe('multiply', () => {
        it('multiply1', () => {
        expect(test1.multiply()).toBe(18);
      })

      it('multiply2', () => {
        expect(test2.multiply()).toBe(20);
      })

      it('multiply3', () => {
        expect(test3.multiply()).toBe(0);
      })
    })
})
