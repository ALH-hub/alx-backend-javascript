const calculateNumber = require('./2-calcul_chai.js');
const { expect } = require('chai');

describe('calculateNumber', () => {
	it('round and sum', () => {
		expect(calculateNumber('SUM', 1.9, 3)).to.equal(5);
		expect(calculateNumber('SUM', 1.9, 3.1)).to.equal(5);
		expect(calculateNumber('SUM', 0.1, 0.2)).to.equal(0);
		expect(calculateNumber('SUM', 0.1, 0.51)).to.equal(1);
		expect(calculateNumber('SUM', 0.1, 0.9)).to.equal(1);
	});
	it('round and subtract', () => {
		expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
		expect(calculateNumber('SUBTRACT', 1.9, 3)).to.equal(-1);
		expect(calculateNumber('SUBTRACT', 1.9, 3.1)).to.equal(-1);
		expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
		expect(calculateNumber('SUBTRACT', 1.4, 4.4)).to.equal(-3);
	});
	it('round and divide', () => {
		expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.3333333333333333);
		expect(calculateNumber('DIVIDE', 1.9, 3)).to.equal(0.6666666666666666);
		expect(calculateNumber('DIVIDE', 0.1, 0)).to.equal('Error');
		expect(calculateNumber('DIVIDE', 0.1, 0.999999999)).to.equal(0);
	});
});
