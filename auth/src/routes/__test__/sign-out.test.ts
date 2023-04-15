import request from 'supertest';
import { app } from '../../app';

it('clears the cookie after signing out', async () => {
  await request(app)
    .post('/api/users/sign-up')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

    let response = await request(app)
      .post('/api/users/sign-in')
      .send({
        email: 'test@test.com',
        password: 'password'
      })
      .expect(200);

    response = await request(app)
      .delete('/api/users/sign-out')
      .send({})
      .expect(200);

    expect(response.get('Set-Cookie')[0])
      .toMatch(
        'session=;'
      );
});
