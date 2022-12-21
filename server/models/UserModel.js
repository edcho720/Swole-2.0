const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user schema
const userSchema = new Schema({

	email: { type: String, required: true , unique: true},

	password: { type: String, required: true },

});

//Collection name is Users
const Users = mongoose.model('Users', userSchema);

// Export db
module.exports = Users;