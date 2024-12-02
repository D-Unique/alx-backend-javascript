import calculateNumber from './2-calcul_chai';
import { expect } from 'chai';

describe('sum', function () {
    it('SUM', function () {
        expect(calculateNumber('SUM', 3.3, 3.7),).to.equal(7);
    })
    
})

describe('Subtract', function () {
    it('SUBTRACT', function () {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(7);
    
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
    })
})

describe('Divide', function () {
    it('DIVIDE', function () {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);

})

})


module.exports = calculateNumber
