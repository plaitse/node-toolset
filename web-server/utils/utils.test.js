const request = require('supertest');
const app = require('../server').app;
const expect = require('expect');

it('should return hello world response', (done) => {
    request(app)
        .get('/')
        .expect(200)
        .expect((res) => {
            expect(res.body).toInclude({
                name: 'Todo App 1.0'
            });
        })
        .end(done);
});

it('should return a user object', (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expect(res.body).toInclude({
                name: 'Vincent',
                age: 27
            });
        })
        .end(done);
});