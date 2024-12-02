const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('Sum', function () {
    it('should return the sum of rounded value of each', function () {
        const result = calculateNumber('SUM', 1.4, 4.5);
        expect(result).to.equal(6);
    });
});

describe('Subtract', function () {
    it('should return the difference of rounded value of each', function () {
        const result = calculateNumber('SUBTRACT', 1.4, 4.5);
        expect(result).to.equal(-4);
    });
});

describe('Divide', function () {
    it('should return the divided value of rounded value of each', function () {
        const result = calculateNumber('DIVIDE', 1.4, 4.5);
        expect(result).to.equal(0.2);
    });

    it('should return Error because divisor is rounded up to zero (0)', function () {
        const result = calculateNumber('DIVIDE', 1.4, 0);
        expect(result).to.equal('Error');
    });
});
