const request = require('supertest');

const server = require('../api/server.js');

// describe('server', function(){
//     it("should get '/'", function(){
//         return request(server)
//             .get('/')
//             .then(res => {
//                 expect(res.status).toBe(200);
//             })
//     })
// })
describe('register', function(){
    it("should register '/api/auth/register", function(){
        return request(server)
            .post('/api/auth/register')
            .send({username: "test5", password: '123'})
            .then(res => {
                expect(res.status).toBe(201);
            })
    })
    it("should fail to register '/api/auth/register", function(){
        return request(server)
            .post('/api/auth/register')
            .send()
            .then(res => {
                expect(res.status).toBe(500);
            })
    })
})

describe('login', function(){
    it("should login '/api/auth/login'", function(){
        return request(server)
            .post('/api/auth/login')
            .send({username: "test1", password: "123"})
            .then(res => {
                expect(res.status).toBe(200);
            })
    })
    it("should fail to login", function(){
        return request(server)
            .post('/api/auth/login')
            .send()
            .then(res => {
                expect(res.status).toBe(500);
            })
    })

})

describe('jokes', function(){
    it('should fail to provide credentials', function(){
        return request(server)
            .get('/api/jokes')
            .then(res => {
                expect(res.status).toBe(400);
            })
    })
    it('should provide incorrect credentials', function(){
        return request(server)
            .get('/api/jokes')
            .send({header: {authorization: 'asdf'}})
            .then(res => {
                expect(res.status).toBe(400);
            })
    })
})
