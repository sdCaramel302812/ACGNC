// Initializes the `work-tag` service on path `/work-tag`
const { WorksTag } = require('./works-tag.class');
const createModel = require('../../models/works-tag.model');
const hooks = require('./works-tag.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/works-tag', new WorksTag(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('works-tag');

  service.hooks(hooks);
};
