const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  ItemType: {
    type: String,
    required: [true, 'Type is required']
  },
  name: {
    type: String,
    trim: true
  },
  subject: {
    type: String,
    trim: true
  },
  text: {
    type: String,
    trim: true
  },
  details: {
    type: String,
    trim: true
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
});

const Item = mongoose.model('item', ItemSchema);

module.exports = Item;