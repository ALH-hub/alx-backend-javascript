// mocha test for api.js module
const { expect } = require('chai');
const app = require('./api');
const chaiHttp = require('chai-http');
const chai = require('chai');

chai.use(chaiHttp);

describe('GET /', () => {
	it('should return Welcome to the payment system', (done) => {
		chai
			.request(app)
			.get('/')
			.end((err, res) => {
				expect(res.text).to.equal('Welcome to the payment system');
				done();
			});
	});

	it('check status code', (done) => {
		chai
			.request(app)
			.get('/')
			.end((err, res) => {
				expect(res).to.have.status(200);
				done();
			});
	});

	it('check content type', (done) => {
		chai
			.request(app)
			.get('/')
			.end((err, res) => {
				expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
				done();
			});
	});
});
