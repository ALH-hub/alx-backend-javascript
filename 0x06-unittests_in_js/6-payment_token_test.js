const sinon = require('sinon');
const mocha = require('mocha');
const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
	it('should return the correct value', function (done) {
		getPaymentTokenFromAPI(true).then((response) => {
			chai
				.expect(response)
				.to.eql({ data: 'Successful response from the API' });
		});
		done();
	});
});
