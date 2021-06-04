const customers = [
  {
     "email":"test@test.com",
     "active":true
  },
  {
     "email":"test1@test.com",
     "active":false
  },
  {
     "email":"test2@test.com",
     "active":true
  }
]

const mail = (customer) => { console.log(`sending email to ${customer.email}`)}
const isActiveCustomer = (customer) => customer.active

const sendEmailToCustomers = (customers) => {
  customers.filter(isActiveCustomer).forEach(mail)
}

sendEmailToCustomers(customers)


class Car {

   setMake(make) {
     this.make = make;
     return this;
   }
 
   setModel(model) {
     this.model = model;
     return this;
   }
 
   setColor(color) {
     this.color = color;
     return this;
   }
 
   save() {
      console.log('saving...')
      return this;
   }
   
   log() {
      console.log(this.make, this.model, this.color);
   }
}
 
 const car = new Car()
               .setMake("Ford")
               .setModel("F150")
               .setColor("Black")
               .save();

car.log();