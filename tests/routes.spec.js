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
                expect(res.text).to.eql('Hello World!');
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
    it('GET /search should return json', (done) => {
        server.get('/search/Bloodborne')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.type).to.eql('application/json');
                done();
            });
    });
    it('GET /id should return json', (done) => {
        server.get('/id/23453')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.type).to.eql('application/json');
                done();
            });
    });
    it('GET /one should return json', (done) => {
        server.get('/one/Bloodborne')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.type).to.eql('application/json');
                done();
            });
    });
});
