
import HttpClient from './undici-client.js';

console.log("= Undici test = ")

const client = new HttpClient({
  endpoint: 'https://gorest.co.in/public-api/posts/29'
  // endpoint: 'https://endpoints.jusbrasil.com.br/argos/participate?experiment_group=serp&experiment=homepage'
})

const res = await client.get();

// console.log('status: ', statusCode);
// console.log('Headers: ', headers);
// console.log('body: ', body);
console.log("res: ", res)


// for await (const data of body) {
//   console.log('data', data)
// }