var testCase = require('mocha').describe;
var it = require('mocha').it;
var after = require('mocha').after;
var server = require('../tests/utils/server.mock');
var expect = require('chai').expect;
// eslint-disable-next-line no-unused-vars
var should = require('chai').should();

testCase('Routes', () => {
    after(() => server.close());
    it('GET /games/search/:name should return json', (done) => {
        server.get('/api/v1/games/search/bloodborne')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.type).to.eql('application/json');
                done();
            });
    });
    it('GET /db/ should return json', (done) => {
        server.get('/api/v1/db/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.type).to.eql('application/json');
                done();
            });
    });
    it('GET /db/:id should return json', (done) => {
        server.get('/api/v1/db/5ef4b79829c14e1d40c8384b')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.type).to.eql('application/json');
                done();
            });
    });
});
