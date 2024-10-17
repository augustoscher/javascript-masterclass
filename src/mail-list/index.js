const { faker } = require('@faker-js/faker');

const apiKey = "********"; 

(async () => {
  const emails = new Array(4000).fill().map(() => faker.internet.exampleEmail())
  const res = await fetch('https://some.where/newsletter', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Api-Key ${apiKey}`
    },
    body: JSON.stringify(emails)
  })
  if (res.ok) {
    console.log('Emails cadastrados com sucesso')
    console.log(res.status)
  } else {
    console.log('Erro ao cadastrar emails')
    console.log(res)
  }
})()








