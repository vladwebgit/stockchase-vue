'use strict';

var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URL, { dialect: 'mysql' });

var db = {
  BlogPost: sequelize['import']('blog_post', require('./blog_post')),
  Company: sequelize['import']('company', require('./company')),
  ExpertRating: sequelize['import']('expert_rating', require('./expert_rating')),
  Expert: sequelize['import']('expert', require('./expert')),
  Group: sequelize['import']('group', require('./group')),
  Opinion: sequelize['import']('opinion', require('./opinion')),
  Ownership: sequelize['import']('ownership', require('./ownership')),
  Sector: sequelize['import']('sector', require('./sector')),
  Signal: sequelize['import']('signal', require('./signal')),
  SocialRating: sequelize['import']('social_rating', require('./social_rating')),
  Source: sequelize['import']('source', require('./source')),
  Subject: sequelize['import']('subject', require('./subject')),
  UserStock: sequelize['import']('user_stock', require('./user_stock')),
  User: sequelize['import']('user', require('./user')),
};

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
