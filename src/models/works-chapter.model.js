// works-chapter-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'worksChapter';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const chapter = new Schema({
    title: String,
    content: String
  });
  const schema = new Schema({
    title: { type: String, required: true, unique: true },
    chapter: [chapter]
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
