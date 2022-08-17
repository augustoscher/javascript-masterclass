// Command Pattern
// Decouple methods that execute tasks by sending commands to a commander
// With the Command Pattern, we can decouple objects that execute a certain task from the object that calls the method.
// patterns.dev/posts/command-pattern/

class OrderManager {
  constructor() {
    this.orders = [];
  }

  execute(command, ...args) {
    return command.execute(this.orders, ...args);
  }
}

class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

const placeOrderCommand = (order, id) => {
  return new Command((orders) => {
    orders.push(id);
    return `You have successfully ordered ${order} (${id})`;
  })
}

const cancelOrderCommand = (id) => {
  return new Command((orders) => {
    orders = orders.filter(order => order.id !== id);
    return `You have canceled your order ${id}`;
  })
}

function CancelOrderCommand2(id) {
  const execute = (orders) => {
    orders = orders.filter(order => order.id !== id);
    return `You have canceled your order ${id}`;
  }
  return new Command(execute);
}

const trackOrderCommand = (id) => {
  return new Command(() => `Your order ${id} will arrive in 20 minutes.`);
}

const manager = new OrderManager();

console.log(manager.execute(placeOrderCommand("Pad Thai", "1234")));
console.log(manager.execute(trackOrderCommand("1234")));
console.log(manager.execute(cancelOrderCommand("1234")));
