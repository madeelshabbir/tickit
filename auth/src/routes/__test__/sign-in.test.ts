import request from 'supertest';
import { app } from '../../app';

it('fails when a email that does not exist is supplied', async () => {
  return request(app)
    .post('/api/users/sign-in')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(400);
});

it('fails when a incorrect password is supplied', async () => {
  await signup();

  return request(app)
  .post('/api/users/sign-in')
  .send({
    email: 'test@test.com',
    password: 'Password'
  })
  .expect(400);
});

it('responds with a cookie when given valid credentials', async () => {
  await signup();

  const response = await request(app)
    .post('/api/users/sign-in')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(200);

  expect(response.get('Set-Cookie')).toBeDefined();
});
