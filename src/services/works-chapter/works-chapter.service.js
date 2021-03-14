// Initializes the `works-chapter` service on path `/works-chapter`
const { WorksChapter } = require('./works-chapter.class');
const createModel = require('../../models/works-chapter.model');
const hooks = require('./works-chapter.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/works-chapter', new WorksChapter(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('works-chapter');

  service.hooks(hooks);
};
