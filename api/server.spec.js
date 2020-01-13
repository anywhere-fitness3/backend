// // require('dotenv').config();

// const request = require('supertest');
// const server = require('./server.js');
// const db = require('../database/db-config.js');

// describe('server.js', () => {
//     describe('POST /register', () => {
//         it('should return status 201 created', async () => {
//             const user = 
//             {
//                 name: 'joe',
//                 username: 'jdoe', 
//                 email: 'jdoe@gmail.com',
//                 password: 'abcd1234'
//             }
//             const response = await request(server)
//             .post('/api/auth/register')
//             .send(user);
//         expect(response.status).toBe(201);
//     })
//     beforeEach(async () => {
//         await db.raw('Delete users and restart');
//     });
// })

// describe('POST /login', () => {
//     it('status 200 ok should be returned', async () => {
//         const user = {username: 'jdoe', password: 'abdc1234'}
//         const response = await request(server)
//         .post('/api/auth/login')
//         .send(user);
//         expect(response.status).toBe(200);
//     })
// })
    
// describe('GET /', () => {
//     it('status 200 ok should be returned', async () => {
//         const response = await request(server).get('/');
//         expect(response.status).toBe('200 status');
//     })

//     it('should return response', async () => {
//         const response = await request(server).get('/');
//         expect(response.type).toBe('text');
//     })
// })
// })
