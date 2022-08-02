const getCitationText = ({ title, year, author }) => 
  `${title}. ${author}, ${year}.`

const proxiedGetCitationText = new Proxy(getCitationText, {
  __proto__: null,
  apply(fn, thisArg, argList) {
    console.log(`[${fn.name}] was called with [${JSON.stringify(argList)}]`)
    return fn.apply(thisArg, argList)
  }
})

console.log(proxiedGetCitationText({
  title: "Uma frase qualquer",
  author: "Ruiz, Simone",
  year: "2022"
}))

// output
// [getCitationText] was called with [[{"title":"Uma frase qualquer","author":"Ruiz, Simone","year":"2022"}]]
// Uma frase qualquer. Ruiz, Simone, 2022.