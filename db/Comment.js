'use strict';

module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    text: DataTypes.STRING
  }, {});
  
  return Comment;
};