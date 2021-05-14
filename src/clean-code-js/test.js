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
const isActiveCustomer = (customers) => customers.active

const sendEmailToCustomers = (customers) => {
  customers.filter(isActiveCustomer).forEach(mail)
}

sendEmailToCustomers(customers)