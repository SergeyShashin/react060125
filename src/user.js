class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHi() {
    return `Privet, ${this.firstName} ${this.lastName}!`;
  }
}

export {User};