const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

test('/checks bad actions give error response', async () => {
  await api
    .get('/api/checks/?action=checkprim&number=2')
    .expect(400)
    .expect('Content-Type', /application\/json/);
  const res1 = await api.get('/api/checks/?action=checkprim&number=2');
  expect(res1.body).toMatchObject({ message: "Incorrect 'action' query string value" });
  await api
    .get('/api/checks/')
    .expect(400)
    .expect('Content-Type', /application\/json/);
  const res2 = await api.get('/api/checks/?action=checkprim&number=2');
  expect(res2.body).toMatchObject({ message: "Incorrect 'action' query string value" });
});

test('/checks action checkprime gives error with bad number value', async () => {
  await api
    .get('/api/checks/?action=checkprime&number=11aa')
    .expect(400)
    .expect('Content-Type', /application\/json/);
  const res = await api.get('/api/checks/?action=checkprime&number=11aa');
  expect(res.body).toMatchObject({ message: "Incorrect 'number', only digits allowed" });
});

test('/checks action checkprime and valid number correct response', async () => {
  await api
    .get('/api/checks/?action=checkprime&number=2')
    .expect(200)
    .expect('Content-Type', /application\/json/);
  const res = await api.get('/api/checks/?action=checkprime&number=2');
  expect(res.body).toMatchObject({ isPrime: true });
});

test('/checks action checkprime and not primes gives "isPrime: false"', async () => {
  await api
    .get('/api/checks/?action=checkprime&number=4')
    .expect(200)
    .expect('Content-Type', /application\/json/);
  const res1 = await api.get('/api/checks/?action=checkprime&number=4');
  expect(res1.body).toMatchObject({ isPrime: false });
  const res2 = await api.get('/api/checks/?action=checkprime&number=12');
  expect(res2.body).toMatchObject({ isPrime: false });
  const res3 = await api.get('/api/checks/?action=checkprime&number=15');
  expect(res3.body).toMatchObject({ isPrime: false });
  const res4 = await api.get('/api/checks/?action=checkprime&number=20');
  expect(res4.body).toMatchObject({ isPrime: false });
});

test('/checks action checkprime and primes gives "isPrime: true"', async () => {
  await api
    .get('/api/checks/?action=checkprime&number=2')
    .expect(200)
    .expect('Content-Type', /application\/json/);
  const res1 = await api.get('/api/checks/?action=checkprime&number=2');
  expect(res1.body).toMatchObject({ isPrime: true });
  const res2 = await api.get('/api/checks/?action=checkprime&number=11');
  expect(res2.body).toMatchObject({ isPrime: true });
  const res3 = await api.get('/api/checks/?action=checkprime&number=13');
  expect(res3.body).toMatchObject({ isPrime: true });
  const res4 = await api.get('/api/checks/?action=checkprime&number=19');
  expect(res4.body).toMatchObject({ isPrime: true });
});

test('/checks action sumandcheck gives error with bad numbers values', async () => {
  await api
    .get('/api/checks/?action=sumandcheck&numbers=1,')
    .expect(400)
    .expect('Content-Type', /application\/json/);
  await api
    .get('/api/checks/?action=sumandcheck&numbers=1,a')
    .expect(400)
    .expect('Content-Type', /application\/json/);
  const res = await api.get('/api/checks/?action=sumandcheck&numbers=1,');
  expect(res.body).toMatchObject({ message: "Incorrect 'numbers' query string value" });
});

test('/checks action sumandcheck and valid number correct reponse', async () => {
  await api
    .get('/api/checks/?action=sumandcheck&numbers=1,2,3,4,5,6')
    .expect(200)
    .expect('Content-Type', /application\/json/);
  const res = await api.get('/api/checks/?action=sumandcheck&numbers=1,2,3,4,5,6');
  expect(res.body).toMatchObject({ sum: 21, isPrime: false });
});

test('/checks action sumandcheck and not primes sums gives "isPrime: false"', async () => {
  await api
    .get('/api/checks/?action=sumandcheck&numbers=1,2,3')
    .expect(200)
    .expect('Content-Type', /application\/json/);
  const res1 = await api.get('/api/checks/?action=sumandcheck&numbers=1,2,3');
  expect(res1.body).toMatchObject({ sum: 6, isPrime: false });
  const res2 = await api.get('/api/checks/?action=sumandcheck&numbers=1,2,3,4');
  expect(res2.body).toMatchObject({ sum: 10, isPrime: false });
  const res3 = await api.get('/api/checks/?action=sumandcheck&numbers=1,2,3,4,5');
  expect(res3.body).toMatchObject({ sum: 15, isPrime: false });
  const res4 = await api.get('/api/checks/?action=sumandcheck&numbers=1,2,3,4,5,1');
  expect(res4.body).toMatchObject({ sum: 16, isPrime: false });
});

test('/checks action sumandcheck and primes sums gives "isPrime: true"', async () => {
  await api
    .get('/api/checks/?action=sumandcheck&numbers=1,2,2')
    .expect(200)
    .expect('Content-Type', /application\/json/);
  const res1 = await api.get('/api/checks/?action=sumandcheck&numbers=1,2');
  expect(res1.body).toMatchObject({ sum: 3, isPrime: true });
  const res2 = await api.get('/api/checks/?action=sumandcheck&numbers=1,2,2');
  expect(res2.body).toMatchObject({ sum: 5, isPrime: true });
  const res3 = await api.get('/api/checks/?action=sumandcheck&numbers=1,2,3,5');
  expect(res3.body).toMatchObject({ sum: 11, isPrime: true });
  const res4 = await api.get('/api/checks/?action=sumandcheck&numbers=1,2,3,4,3');
  expect(res4.body).toMatchObject({ sum: 13, isPrime: true });
});