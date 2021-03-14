const assert = require('assert');
const app = require('../../src/app');

describe('\'works-info\' service', () => {
  it('registered the service', () => {
    const service = app.service('works-info');

    assert.ok(service, 'Registered the service');
  });
});
