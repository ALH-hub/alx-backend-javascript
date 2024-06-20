const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
	it('should return 4', function () {
		assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
	});

	it('should return 5', function () {
		assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
	});

	it('should return 5', function () {
		assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
	});

	it('should return 6', function () {
		assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
	});

	it('should return 5', function () {
		assert.strictEqual(calculateNumber('SUM', 1.4, 3.7), 5);
	});

	it('should return -2', function () {
		assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.2), -2);
	});

	it('should return -3', function () {
		assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.5), -3);
	});

	it('should return -2', function () {
		assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.4), -2);
	});

	it('should return 0', function () {
		assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
	});

	it('should return -3', function () {
		assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.7), -3);
	});

	it('should return .25', function () {
		assert.strictEqual(calculateNumber('DIVIDE', 1.4, 3.7), 0.25);
	});

	// New test cases
	it('should return -.25', function () {
		assert.strictEqual(calculateNumber('DIVIDE', -1.5, 3.5), -0.25);
	});

	it('should return Error', function () {
		assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
	});

	it('should return 1', function () {
		assert.strictEqual(calculateNumber('DIVIDE', 0.5, 0.5), 1);
	});

	it('should return 0.5', function () {
		assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.5), 0.5);
	});
});
