// https://mathiasbynens.be/notes/javascript-benchmarking
// This snippet executes the test code for about a second, i.e. until totalTime is greater than or equal to 1000 ms.

var hz
var period
var totalTime
var startTime = new Date()
var runs = 0

do {
  // Code snippet goes here.
  runs++
  totalTime = new Date() - startTime
} while (totalTime < 1000)

// Convert milliseconds to seconds.
totalTime /= 1000

// period → how long each operation takes
period = totalTime / runs

// hz → the number of operations per second.
hz = 1 / period

// This can be shortened to:
// hz = (runs * 1000) / totalTime;

console.log('total time: ', totalTime)
console.log('operations per second: ', hz)
