const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

test('/healthcheck gives response', async () => {
  await api
    .get('/healthcheck')
    .expect(200);
});

test('/badroute gives not found response', async () => {
  await api
    .get('/check')
    .expect(404)
    .expect('Content-Type', /application\/json/);
  const res = await api.get('/check');
  expect(res.body).toMatchObject({ message: 'No page found, please check endpoint' });
});