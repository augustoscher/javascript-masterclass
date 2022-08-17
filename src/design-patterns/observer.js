// Observer Pattern
// https://www.patterns.dev/posts/observer-pattern/
// With the observer pattern, we can subscribe certain objects, the observers, to another object, called the observable.
// Whenever an event occurs, the observable notifies all its observers!

// PROS
// Using the observer pattern is a great way to enforce separation of concerns and the single-responsiblity principle.
// The observer objects aren’t tightly coupled to the observable object, and can be (de)coupled at any time. 
// The observable object is responsible for monitoring the events, while the observers simply handle the received data.

// CONS
// If an observer becomes too complex, it may cause performance issues when notifying all subscribers.

class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(func) {
    this.observers.push(func);
  }

  unsubscribe(func) {
    this.observers = this.observers.filter(observer => observer !== func);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}

const logger = (data) => {
  console.log("logging: ", data)
}

const sendEmail = (data) => {
  console.log("sending email: ", data)
}

const observable = new Observable();
observable.subscribe(logger);
observable.subscribe(sendEmail);

observable.notify("Clicked on button A");
console.log();
observable.notify("Clicked on button B");
console.log();

observable.unsubscribe(logger);
observable.notify("Clicked on button C");
