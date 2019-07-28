//Synch
console.log("Synch")
console.log(1);
console.log(2);
console.log(3);
//Asynch
console.log("Asynch")
console.log(1);
setTimeout(() => console.log(2), 0);
console.log(3);
//event-loop  latar belakang munculnya asynchronous I/O
const bar = () => console.log('bar')
const baz = () => console.log('baz')
const foo = () => {
  console.log('foo')
  bar()
  baz()
}
console.log("event-loop")
console.log(foo())

//you can read https://eloquentjavascript.net/11_async.html
