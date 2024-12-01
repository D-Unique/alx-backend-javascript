const assert = require('assert');
const calculateNumber = require('./0-calcul');


it('it should be equal 3', function () {
    assert.equal(calculateNumber(1.2, 1.5), 3);
});
it(' it should equal 4', function () {
    assert.equal(calculateNumber(2.6, 1.1), 4);
})
