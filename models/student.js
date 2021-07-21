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

const Student = mongoose.model('Student', studentSchema)
module.exports=Student;