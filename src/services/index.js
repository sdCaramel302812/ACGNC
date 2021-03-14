const worksTag = require('./works-tag/works-tag.service.js');
const user = require('./user/user.service.js');
const image = require('./image/image.service.js');
const worksInfo = require('./works-info/works-info.service.js');
const worksChapter = require('./works-chapter/works-chapter.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(worksTag);
  app.configure(user);
  app.configure(image);
  app.configure(worksInfo);
  app.configure(worksChapter);
};
