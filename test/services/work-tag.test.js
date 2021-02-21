const assert = require('assert');
const app = require('../../src/app');

describe('\'work-tag\' service', () => {
  it('registered the service', () => {
    const service = app.service('work-tag');

    assert.ok(service, 'Registered the service');
  });
});
