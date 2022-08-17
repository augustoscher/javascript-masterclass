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

function PlaceOrderCommand(name, id) {
  return new Command((orders) => {
    orders.push({ id ,name });
    return `You have successfully ordered ${name} (${id})`;
  })
}

function UpdateOrderStatusCommand(status, id) {
  return new Command((orders) => {
    orders = orders
      .filter((order) => order.id === id)
      .map((order) => ({ ...order, status }))
      return `You have update order status to ${status}`;
  })
}

function CancelOrderCommand(id) {
  return new Command((orders) => {
    orders = orders.filter(order => order.id !== id);
    return `You have canceled your order ${id}`;
  })
}

function TrackOrderCommand(id) {
  return new Command(() => `Your order ${id} will arrive in 20 minutes.`);
}

function GetOrdersCommand() {
  return new Command((orders) => orders)
}

const manager = new OrderManager();

console.log(manager.execute(new PlaceOrderCommand("Pad Thai", "1234")));
console.log(manager.execute(new PlaceOrderCommand("Burrito", "12345")));
console.log(manager.execute(new CancelOrderCommand("1234")));
console.log(manager.execute(new GetOrdersCommand()));

console.log(manager.execute(new UpdateOrderStatusCommand("Done", "12345")));
console.log(manager.execute(new GetOrdersCommand()));