function User(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = gender;
  this.age = age;
}

var user1 = new User("Maryam", "Alizadeh", 27, "female");

User.prototype.emailDomain = "@facebook.com";

User.prototype.getEmailAddress = function() {
  return this.firstName + this.lastName + this.emailDomain;
};
