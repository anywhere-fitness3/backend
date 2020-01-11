require('dotenv').config();

const supertest = require('supertest');
const server = require('./server.js');

describe('server', () => {
    test('test environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });
})

describe('GET /', () => {
    it('status 200 should be returned', async () => {
        const response = await supertest(server).get('/');
        expect(response.type).toBe('200 status');
    })
    
    it('json expected', async () => {
        const response = await supertest(server).get('/');
        expect(response.type).toBe('application/json');
    })

    it('object returned correctly', async () => {
        const response = await supertest(server).get('/');
        expect(response.body).toEqual({ api: 'working' });
    });
});
