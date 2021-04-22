// HashTable/HashMap Examples
// https://javascript.plainenglish.io/algorithm-in-javascript-hash-table-7b0464d2b81b
// You are on a biz trip and travelling from one city to another. 
// you have a stack of unsorted flight boarding passes. 
// only departure city and destination city are on the boarding pass.
// how do you find the first departure city and your final destination city, write the solution in javascript


// Key solution strategy — First note, that each city will be shown up in the boarding ticket 2 times (one for departure and one for arrival) — Except the first city (being the first departure) and the last city (being the last arrival) which will show up only once.
// So arithmatically all cities will cancel each other, except the first departure and final arrival city.

//bnu - nav
//sp - sal
//nav - sp

const findDepartureArrival = tickets => {
  const hashMap = {}

  for (let tkt in tickets) {
    const depart = tickets[tkt].departure;
    const arrival = tickets[tkt].arrival;

    if (! (depart in hashMap))
      hashMap[depart] = -1;
    else
      hashMap[depart] = hashMap[depart] -1;

    if (!(arrival in hashMap))
      hashMap[arrival] = 1;
    else
      hashMap[arrival] = hashMap[arrival] + 1;
  }

  console.log(hashMap)
}

const ticketsMap = {
  tkt1: {
    departure: 'Los Angeles',
    arrival: 'San Francisco'
  },
  tkt2: {
      departure: 'San Francisco',
      arrival: 'New York'
  },
  tkt3: {
      departure: 'Moscow',
      arrival: 'Mali'
  },
  tkt4: {
      departure: 'Barcelona',
      arrival: 'Moscow'
  },
  tkt5: {
      departure: 'New York',
      arrival: 'Barcelona'
  }
}

findDepartureArrival(ticketsMap)