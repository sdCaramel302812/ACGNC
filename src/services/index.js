const workTag = require('./work-tag/work-tag.service.js');
const user = require('./user/user.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(workTag);
  app.configure(user);
};
