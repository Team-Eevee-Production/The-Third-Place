const request = require('supertest');
const assert = require('assert');

let body;

describe('Image Route Tests', function() {
  it('responds with json', function(done) {
    request('localhost:8080')
      .post('/img')
      .set('Accept', 'application/json')
      .send({'mood': "glomy", 'prompt': "fox sitting in an orchard"})
      .expect('Content-Type', /json/)
      .expect(response => {
        expect(response.status).toBe(200)
        body = response.body;
      })
      .end(done)
  });
  test('response array size greater than 0', function(done) {
    expect(body.length).toBeGreaterThan(50);
    done();
  });
});
