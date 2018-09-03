const mongoose = require('mongoose');
const random = require('meteor-random');

const Schema = mongoose.Schema;

const schema = new Schema({
  _id: {
    type: String,
    default: function defaultId() { return random.id([24]); },
  },
  username: String,
  password: String,
  games: [{
    date: Date,
    turns: Number,
    solved: Boolean,
  }],
}, {
  collection: 'users',
  timestamps: true,
});

schema.index({ userName: 1 });

const User = mongoose.model('user', schema);

module.exports = {
  User,
};
