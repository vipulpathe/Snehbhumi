const mongoose = require('mongoose');

const customer = new mongoose.Schema({
    firstName: { type: String },
    middleName: { type: String },
    lastName: { type: String },
    dob: { type: Date },
    gender: { type: String },
    address: { type: String },
    mobileNumber: { type: Number },
    emailId: { type: String },
    qualification: { type: String },
    occupation: { type: String },
    dateOfMembership: { type: Date },
    membershipApproved: { type: Boolean },
    depositAmount: { type: Number },
    checkedBy: { type: String },
    approvedBy: { type: String }
});
mongoose.model('Customer', customer);
// module.exports = { Customer };
