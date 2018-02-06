const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String
  },
  items: [{
    type: Schema.Types.ObjectId,
    ref: item
  }]
})

const User = mongoose.model('user', UserSchema);

module.exports = User;