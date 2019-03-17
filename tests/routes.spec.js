var testCase = require('mocha').describe;
var it = require('mocha').it;
var after = require('mocha').after;
var server = require('../tests/utils/server.mock');
var expect = require('chai').expect;
// eslint-disable-next-line no-unused-vars
var should = require('chai').should();

testCase('Routes', () => {
    after(() => server.close());

    it('GET / should return html', (done) => {
        server.get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.type).to.eql('text/html');
                done();
            });
    });
    it('PUT / should return 204', (done) => {
        server.put('/')
            .send("data", "data")
            .end((err, res) => {
                expect(res).to.have.status(204);
                done();
            });
    });
    it('POST / should return 204', (done) => {
        server.post('/')
            .send("data", "data")
            .end((err, res) => {
                expect(res).to.have.status(204);
                done();
            });
    });
    it('DELETE / should return 204', (done) => {
        server.delete('/')
            .send("data", "data")
            .end((err, res) => {
                expect(res).to.have.status(204);
                done();
            });
    });
});
