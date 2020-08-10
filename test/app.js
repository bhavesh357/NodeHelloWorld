const chai = require('chai');
const chaiHttp = require('chai-http');
const {assert} = require('chai');
const app = require('./../server');
chai.use(chaiHttp);

describe('Testing hello', () => {
    it('It says hello', (done) => {
        chai
            .request(app)
            .get('/')
            .end((err, response) => {
                const result = response.body.message;
                assert.equal(result, 'Hello World');
                done();
            });
    });
});
