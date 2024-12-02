const calculateNumber = require('./1-calcul')
const { expect } = require('chai');

describe('sum', function () {
    it('SUM', function () {
        expect(calculateNumber('SUM', 3.3, 3.7)).to.equal(7);
    })
    
})

describe('Subtract', function () {
    it('SUBTRACT', function () {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(7);
    })
})

describe('Divide', function () {
    it('DIVIDE', function () {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);

})

})


module.exports = calculateNumber
