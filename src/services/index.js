const worksTag = require('./works-tag/works-tag.service.js');
const user = require('./user/user.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(worksTag);
  app.configure(user);
};
