const { Service } = require('feathers-mongoose');

exports.WorksTag = class WorksTag extends Service {
  async find(params) {
    return this.Model.find({}, 'name count -_id');
  }
};
