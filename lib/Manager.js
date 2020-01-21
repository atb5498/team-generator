function Manager(name, id, email, officeNumber) {
    this.officeNumber = officeNumber;
};

Manager.prototype.getRole = function () {
    return "Manager";
};

Manager.prototype.getOfficeNumber = function () {
    return this.officeNumber;
};

module.exports = Manager;
