const calculateNumber = require('./1-calcul')
const assert = require('assert')

describe('operation', function () {
    it('SUM', function () {
        assert.equal(calculateNumber('SUM', 3.3, 3.7), 7)
    })
    it('SUBTRACT', function () {
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
    })
    it('DIVIDE', function () {
        assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error')
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
    })

})
