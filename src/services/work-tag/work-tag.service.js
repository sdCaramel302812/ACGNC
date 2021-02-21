// Initializes the `work-tag` service on path `/work-tag`
const { WorkTag } = require('./work-tag.class');
const createModel = require('../../models/work-tag.model');
const hooks = require('./work-tag.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/work-tag', new WorkTag(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('work-tag');

  service.hooks(hooks);
};
