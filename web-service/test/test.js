var app = require('../server.js');
var request = require('supertest').agent(app.listen());

describe("Lex", () => {
    it('should require token object as input', (done) => {
        request
            .post('/lex')
            .expect(500)
            .expect('token required', done)
    }),
    it('should return lex object', (done) => {
        const token = { token: "123" };
        request
            .post('/lex')
            .send(token)
            .expect(200)
            .expect('[{"INTCONST":123}]', done)
    }),
    it('should allow cross origin', (done) => {
        const token = { token: "123" };
        request
            .post('/lex')
            .send(token)
            .expect('Access-Control-Allow-Origin', '*')
            .expect(200, done);
    })
})
