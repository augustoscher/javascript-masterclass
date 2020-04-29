const Faker = require('faker');

const generateEmailAndLastname = size => {
  console.log('email;lastname');
  for (let i = 0; i < size; i++) {
    console.log(`${Faker.internet.exampleEmail()};${Faker.name.lastName()}`)
  }
}

const main = () => {
  generateEmailAndLastname(100);
};

main();