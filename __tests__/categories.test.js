import request from 'supertest';
import {
  describe, expect, it, jest,
} from '@jest/globals';
import app from '../src/main.js';

describe('GET em /api/categories', () => {
  it('Deve retornar uma lista de categorias', async () => {
    const res = await request(app)
      .get('/api/categories')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let idResposta;
describe('POST em /api/categories', () => {
  it('Deve adicionar uma nova categoria', async () => {
    const res = await request(app)
      .post('/api/categories')
      .send({
        nome: 'MAQUIAGEM',
        status: 'ATIVA',
      })
      .expect(201);
    idResposta = res.body._id;
  });
  it('Deve nao adicionar nada ao faltar informações', async () => {
    await request(app)
      .post('/api/categories')
      .send({})
      .expect(417);
  });
});

describe('GET em /api/categories/:id', () => {
  it('Deve retornar categoria com ID específico', async () => {
    await request(app)
      .get(`/api/categories/${idResposta}`)
      .expect(200);
  });
});
