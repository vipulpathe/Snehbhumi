const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');
// var { Customer } = mongoose.model('Customer');

module.exports.addNewCustomer = (req, res, next) => {
    var customer = new Customer();
    customer.firstName = req.body.firstName;
    customer.middleName = req.body.middleName;
    customer.lastName = req.body.lastName;
    customer.dob = req.body.dob;
    customer.gender = req.body.gender;
    customer.address = req.body.address;
    customer.mobileNumber = req.body.mobileNumber;
    customer.emailId = req.body.emailId;
    customer.qualification = req.body.qualification;
    customer.occupation = req.body.occupation;
    customer.dateOfMembership = req.body.dateOfMembership;
    customer.membershipApproved = req.body.membershipApproved;
    customer.depositAmount = req.body.depositAmount;
    customer.checkedBy = req.body.checkedBy;
    customer.approvedBy = req.body.approvedBy;

    customer.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error while saving data' + JSON.stringify(err, undefined, 2));
        }
    });
};
