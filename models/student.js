const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
  name: {
    type: String
  },
  class: {
    type: String
  },
  doa: {
    type: String
  },
  dob: {
     type:String
  },

   fax: {
       type: Number
   },
   gname: {
     type: Number
   }
}, {
    collection: 'students'
  })

module.exports = mongoose.model('Student', studentSchema)