const Faker = require("faker");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const generateEmailAndLastname = size => {
  const data = [];
  for (let i = 0; i < size; i++) {
    data.push({
      email: `${Faker.internet.exampleEmail()}`,
      lastname: `${Faker.name.lastName()}`
    });
  }

  const csvWriter = createCsvWriter({
    path: "leads.csv",
    header: [
      {id: 'email', title: 'email'},
      {id: 'lastname', title: 'lastname'},
    ]
  });

  generateFile(csvWriter, data);
}

const generateEmail = (size) => {
  const data = [];
  for (let i = 0; i < size; i++) {
    data.push({
      email: `${Faker.internet.exampleEmail()}`
    });
  }

  const csvWriter = createCsvWriter({
    path: "leads_greater_than_25K.csv",
    header: [{ id: "email", title: "Email" }],
  });

  generateFile(csvWriter, data);  
};

const generateFile = (writer, data) => {
  writer
  .writeRecords(data)
  .then(() => console.log("The CSV file was written successfully"));
}

const main = () => {
  // generateEmail(25_000);
  generateEmailAndLastname(100)
};

main();
