const calculateNumber = require('./2-calcul_chai.js');
const { expect } = require('chai');

describe('calculateNumber', () => {
	it('round and add', () => {
		expect(calculateNumber('SUM', 1, 3) === 4);
	});

	it('round and sum', () => {
		expect(calculateNumber('SUM', 1.9, 3)).to.equal(5);
		expect(calculateNumber('SUM', 1.9, 3.1)).to.equal(5);
		expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
		expect(calculateNumber('SUM', 1.4, 4.4)).to.equal(6);
		expect(calculateNumber('SUM', 1.4, 4.6)).to.equal(7);
		expect(calculateNumber('SUM', 0.1, 0.2)).to.equal(0);
		expect(calculateNumber('SUM', 0.1, 0.6)).to.equal(1);
		expect(calculateNumber('SUM', 0.1, 0.5)).to.equal(1);
		expect(calculateNumber('SUM', 0.1, 0.4)).to.equal(0);
		expect(calculateNumber('SUM', 0.1, 0.49)).to.equal(0);
		expect(calculateNumber('SUM', 0.1, 0.51)).to.equal(1);
		expect(calculateNumber('SUM', 0.1, 0.9)).to.equal(1);
		expect(calculateNumber('SUM', 0.1, 0.99)).to.equal(1);
		expect(calculateNumber('SUM', 0.1, 0.999)).to.equal(1);
		expect(calculateNumber('SUM', 0.1, 0.9999)).to.equal(1);
		expect(calculateNumber('SUM', 0.1, 0.99999)).to.equal(1);
		expect(calculateNumber('SUM', 0.1, 0.999999)).to.equal(1);
		expect(calculateNumber('SUM', 0.1, 0.9999999)).to.equal(1);
		expect(calculateNumber('SUM', 0.1, 0.99999999)).to.equal(1);
		expect(calculateNumber('SUM', 0.1, 0.999999999)).to.equal(1);
	});
	it('round and subtract', () => {
		expect(calculateNumber('SUBRACT', 1, 3)).to.equal(-2);
		expect(calculateNumber('SUBRACT', 1.9, 3)).to.equal(-1);
		expect(calculateNumber('SUBRACT', 1.9, 3.1)).to.equal(-1);
		expect(calculateNumber('SUBRACT', 1.4, 4.5)).to.equal(-4);
		expect(calculateNumber('SUBRACT', 1.4, 4.4)).to.equal(-3);
		expect(calculateNumber('SUBRACT', 1.4, 4.6)).to.equal(-4);
		expect(calculateNumber('SUBRACT', 0.1, 0.2)).to.equal(0);
		expect(calculateNumber('SUBRACT', 0.1, 0.6)).to.equal(0);
		expect(calculateNumber('SUBRACT', 0.1, 0.5)).to.equal(0);
		expect(calculateNumber('SUBRACT', 0.1, 0.4)).to.equal(0);
		expect(calculateNumber('SUBRACT', 0.1, 0.49)).to.equal(0);
	});
	it('round and divide', () => {
		expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.3333333333333333);
		expect(calculateNumber('DIVIDE', 1.9, 3)).to.equal(0.6333333333333333);
		expect(calculateNumber('DIVIDE', 1.9, 3.1)).to.equal(0.6129032258064516);
		expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.3111111111111111);
		expect(calculateNumber('DIVIDE', 1.4, 4.4)).to.equal(0.3181818181818182);
		expect(calculateNumber('DIVIDE', 1.4, 4.6)).to.equal(0.30434782608695654);
		expect(calculateNumber('DIVIDE', 0.1, 0.2)).to.equal(0.5);
		expect(calculateNumber('DIVIDE', 0.1, 0.6)).to.equal(0.16666666666666666);
		expect(calculateNumber('DIVIDE', 0.1, 0)).to.equal('Error');
		expect(calculateNumber('DIVIDE', 0.1, 0.999999999)).to.equal(0.1);
	});
});
