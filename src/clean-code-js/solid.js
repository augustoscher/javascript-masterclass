//=================== SOLID =====================
// 1. Single Responsibility Principle (SRP)
// As stated in Clean Code, 
// ========== "There should never be more than one reason for a class to change". ==========
// It's tempting to jam-pack a class with a lot of functionality, like when you can only take one suitcase on your flight.
// The issue with this is that your class won't be conceptually cohesive and it will give it many reasons to change.
// Minimizing the amount of times you need to change a class is important. 
// It's important because if too much functionality is in one class and you modify a piece of it, it can be difficult to understand how that will affect other dependent modules in your codebase.

// BAD
class UserSettings {
  constructor(user) {
    this.user = user;
  }

  changeSettings(settings) {
    if (this.verifyCredentials()) {
    }
  }

  verifyCredentials() {
  }
}

// GOOD
// This should be exclusive file.
class UserAuth {
  constructor(user) {
    this.user = user;
  }

  verifyCredentials() {
  }
}

// This should be exclusive file.
import UserAuth from './user-auth'

class UserSettings {
  constructor(user) {
    this.user = user;
    this.auth = new UserAuth(user);
  }

  changeSettings(settings) {
    if (this.auth.verifyCredentials()) {
    }
  }
}

//========================================
// 2. Open/Closed Principle (OCP)
// As stated by Bertrand Meyer, "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification."
// What does that mean though? This principle basically states that you should allow users to add new functionalities without changing existing code.