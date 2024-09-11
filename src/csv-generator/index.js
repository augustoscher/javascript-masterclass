const { faker } = require('@faker-js/faker');
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const generateEmailAndLastname = size => {
  const data = [];
  for (let i = 0; i < size; i++) {
    data.push({
      pid: faker.number.bigInt(),
      email: faker.internet.exampleEmail(),
      name: faker.person.firstName()
    });
  }

  const csvWriter = createCsvWriter({
    path: "leads.csv",
    header: [
      {id: 'pid', title: 'pid'},
      {id: 'email', title: 'email'},
      {id: 'name', title: 'name'},
    ]
  });

  generateFile(csvWriter, data);
}

const generateFile = (writer, data) => {
  writer
  .writeRecords(data)
  .then(() => console.log("The CSV file was written successfully"));
}

const main = () => {
  generateEmailAndLastname(500_000)
};

main();
