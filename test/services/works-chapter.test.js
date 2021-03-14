const assert = require('assert');
const app = require('../../src/app');

describe('\'works-chapter\' service', () => {
  it('registered the service', () => {
    const service = app.service('works-chapter');

    assert.ok(service, 'Registered the service');
  });
});
