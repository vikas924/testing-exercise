class calculator{
    constructor(a,b) {
        this.a = a;
        this.b = b;
    }

    add() {
        return this.a + this.b;
      }
    
      subtract() {
        return this.a - this.b;
      }
    
      divide() {
        if (this.b === 0) {
          throw new Error('Cannot divide by zero');
        }
    
        return this.a / this.b;
      }
    
      multiply() {
        return this.a * this.b;
      }
    }

    module.exports = calculator;