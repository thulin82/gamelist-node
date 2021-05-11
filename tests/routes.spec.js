var testCase = require('mocha').describe;
var it = require('mocha').it;
var after = require('mocha').after;
var server = require('../tests/utils/server.mock');
var expect = require('chai').expect;
// eslint-disable-next-line no-unused-vars
var should = require('chai').should();

testCase('Routes', () => {
    after(() => server.close());

    it('GET /games/:id should return json', (done) => {
        server.get('/api/v1/games/21262')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.type).to.eql('application/json');
                done();
            });
    });
    it('GET /games/find/bloodborne should return json', (done) => {
        server.get('/api/v1/games/find/bloodborne')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.type).to.eql('application/json');
                done();
            });
    });
    it('GET /games/findone/bloodborne should return json', (done) => {
        server.get('/api/v1/games/findone/bloodborne')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.type).to.eql('application/json');
                done();
            });
    });
});
