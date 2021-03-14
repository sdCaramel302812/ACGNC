// Initializes the `works-info` service on path `/works-info`
const { WorksInfo } = require('./works-info.class');
const createModel = require('../../models/works-info.model');
const hooks = require('./works-info.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/works-info', new WorksInfo(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('works-info');

  service.hooks(hooks);
};
