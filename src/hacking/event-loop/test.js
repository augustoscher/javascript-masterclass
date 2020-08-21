
console.log('1'); //blocking

// sended to task queue.
// event loop waits until stack is clear
// so he will remove event from task queue and push on top of stack
setTimeout(() => console.log('test'), 0); 

console.log('2'); //blocking

console.log()
console.log(' ======== ')
console.log()

setTimeout(() => console.log('1'), 0); //sended to task queue 

setTimeout(() => console.log('2'), 0); //sended to task queue 

setTimeout(() => console.log('3'), 0); //sended to task queue 

console.log()
console.log(' ======== ASYNC FOREACH')
console.log()

// Synchronous
const a = [1,2,3]
a.forEach(function(i){
  console.log(i);
});

// Asynchronous
function asyncForEach(array, cb) {
  array.forEach(function() {
    setTimeout(cb, 0);
  })
}

asyncForEach(a, function(i){
  console.log(i)
})
