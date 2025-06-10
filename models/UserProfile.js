class User {
  constructor(firstName, lastName, email) {
    this.created = Date.now();
    this.updated = Date.now();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.booksRead = [];
    this.favouriteGenre = ['Nothing yet'];
  }

  get fullName() {
    return this.getFullName();
  }

  getFullName() {
    return `The user's full name is: ${this.firstName} ${this.lastName}.`;
  }

  get userEmail() {
    return this.email;
  }

  analyzeUser() {
    return `${this.getFullName()}'s favourite genre is: ${this.favouriteGenre[0]}`;
  }
}
