import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'TK',
  lastName: 'Teh'
};

var printL = (string) => {
  console.log('%c' + string, 'font-weight:bold; color: #105A5A; font-size:x-large; font-family: "Verdana";');
}

var printM = (string) => {
  console.log('%c' + string, 'font-weight:bold; color: #49A19A; font-size:medium; font-family: "Verdana";');
}

var printS = (string) => {
  console.log(string);

}


printL('ECMAScript Testing');
printM('Arrow function applied in console color method')

printM('Array.prototype.includes')
printS("['a', 'b', 'c'].includes('a') : " + ['a', 'b', 'c'].includes('a'));
printS("['a', 'b', 'c'].indexOf('b') : " + ['a', 'b', 'c'].indexOf('b'));
printS("('test').includes('s') : " + ('test').includes('s'));
printS("('test').indexOf('s') : " + ('test').indexOf('s'));
printS("[NaN].includes(NaN) : " + [NaN].includes(NaN));
printS("[NaN].indexOf(NaN) : " + [NaN].indexOf(NaN));

printM('Exponentiation operator (**)')
printS('2**3 : ' + 2 ** 3);
printS('Math.pow(2, 3) : ' + Math.pow(2, 3));
let num = 3; //use let
printS('let num = 3');
printS('num **= 2 : ' + (num **= 2));

printM('PROMISES')
setTimeout(function () {
  printS('I promised to run after 1s')
  setTimeout(function () {
    printS('I promised to run after 2s')
  }, 1000)
}, 1000)

const wait = () => new Promise((resolve, reject) => {
  setTimeout(resolve, 1000)
})

wait().then(() => {
    printS('I promised to run after 1s')
    return wait()
  })
  .then(() => printS('I promised to run after 2s'))


const status = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  }
  return Promise.reject(new Error(response.statusText))
}
// const json = (response) => response.json()
// fetch('/todos.json')
// .then(status)
// .then(json)
// .then((data) => { console.log('Request succeeded with JSON response', data) })
// .catch((error) => { console.log('Request failed', error) })


printM('GENERATORS')
printS(`function* generator(i) {
  yield i;
  yield i + 10;
  yield i - 10;
  yield i + 30;
}

var gen = generator(10)`)

function* generator(i) {
  yield i;
  yield i + 10;
  yield i - 10;
  yield i + 30;
}

var gen = generator(10);

printS('gen.next().value : ' + gen.next().value);
printS('gen.next().value : ' + gen.next().value);
printS('gen.next().value : ' + gen.next().value);
printS('gen.next().value : ' + gen.next().value);


printM('CLASSES');
class Person {
  constructor(name) {
    this.name = name
  }

  hello() {
    return 'Hello, I am ' + this.name + '.'
  }
}

class Actor extends Person {
  hello() {
    return super.hello() + ' I am an actor.'
  }

  get fullName() {
    return `${this.name}`
  }
}

var tomCruise = new Actor('Tom Cruise')

printS('tomCruise.hello() : ' + tomCruise.hello());
printS('tomCruise.fullName : ' + tomCruise.fullName);

printS(`const joe = 'test'
const test = 'something \${joe}'`);

const joe = 'test'
const test = `something ${joe}` //something test

printS('test : ' + test);

const foo = () => {
  return false;
}

printS(`something ${1 + 2 + 3}`);
printS(`something ${foo() ? 'x' : 'y' }`);

const printOut = `Hey,
this
multi 
line
string
is awesome!`;

printS(printOut);

const a = [1, 2, 3]
const b = [...a, 4, 5, 6]
const c = [...a]

printS('a :' + a);
printS('[...a, 4, 5, 6] :' + b);
printS('[...a] :' + c);

const hey = 'hey'
//const arrayized = [...hey] // ['h', 'e', 'y']

printS('[...hey] :' + [...hey]);

const f = (n1, n2, n3) => {
  printS(`${n1}  ${n2}  ${n3}  : ` + n1 + n2 + n3);
}
f(...a);

var aa, bb, rest;
[aa, bb] = [10, 20];
printS(aa + ' ' + bb)

printS(a);
// expected output: 10

[aa, bb, ...rest] = [10, 20, 30, 40, 50];

printS(rest);

const person = {
  firstName: 'Tom',
  lastName: 'Cruise',
  actor: true,
  age: 54, //made up
}

const {
  firstName: name,
  age
} = person

printS(age + '  ' + name); //54

const numberlist = [1, 2, 3, 4, 5]
const [first, second, , , fifth] = numberlist;

printS(first + '  ' + second + '  ' + fifth);

const something = 'y included in x ?'
const something2 = 'z included in x ?'
const x = {
  something,
  something2
}
printS(x.something + '  ' + x.something2);

const anObject = {
  y: 'y',
  x: 'x',
  test: () => 'zoo',
  ['a' + '_' + 'b']: 'z'
}

printS('anObject.a_b : ' + anObject.a_b)
const x2 = {
  __proto__: anObject,

  test() {
    return super.test() + 'x'
  }
}

printS(x2.__proto__);
printS(x2.test()); //zoox
printS(x2.a_b);

//iterate over the value
for (const v of ['a', 'b', 'c']) {
  printS(v);
}
//get the index as well, using `entries()`
for (const [i, v] of ['a', 'b', 'c'].entries()) {
  printS(i, v);
}


const s = new Set()
s.add('one')
s.add('two')
s.add('four')
s.has('one') //true
s.has('three') //false
//s.delete('one')
printS(s.size)
//s.clear()
for (const k of s.keys()) {
  console.log(k)
}

for (const k of s.values()) {
  console.log(k)
}

s.forEach(v => console.log('v = ' + v))

const i = s.entries()
console.log(i.next())

const ss = new Set([1, 2, 3, 4])

const m = new Map()
m.set('color', 'red')
m.set('age', 2)
const color = m.get('color')
const age2 = m.get('age')
const mm = new Map([
  ['color', 'red'],
  ['owner', 'Flavio'],
  ['age', 2]
])


const aaa = [...m.keys()]
printS(aaa);

// const list = ['a', 'b', 'c']
// for (let i = 0; i < list.length; i++) {
// console.log(list[i]) //value
// console.log(i) //index
// }

const list = ['a', 'b', 'c']
list.forEach((item, index) => {
  console.log(item) //value
  console.log(index) //index
})
//index is optional
list.forEach(item => console.log(item))

const object = {
  y: 'yaaa',
  x: 'xaaa'
}
for (let property in object) {
  console.log(property + '  ' + object[property]) //property name + property value
}


//iterate over the value
for (const value of ['a', 'b', 'c']) {
  console.log(value) //value
}

//get the index as well, using `entries()`
for (const [index, value] of ['a', 'b', 'c'].entries()) {
  console.log(index) //index
  console.log(value) //value
}

printM('OBJECT.VALUES()')
const person1 = {
  name: 'Fred',
  age: 87
}
printS(Object.values(person1)) // ['Fred', 87]

const people = ['Fred', 'Tony']
printS(Object.values(people)) // ['Fred', 'Tony']

printM('OBJECT.ENTRIES()');

printS(Object.entries(person)) // [['name', 'Fred'], ['age', 87]]


printM('ASYNC FUNCTIONS')

function doSomethingAsync() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('I did something'), 3000)
  })
}
async function doSomething() {
  console.log(await doSomethingAsync())
}
console.log('Before')
doSomething()
console.log('After')


function promiseToDoSomething() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('I did something'), 10000)
  })
}
async function watchOverSomeoneDoingSomething() {
  const something = await promiseToDoSomething()
  return something + ' and I watched'
}
async function watchOverSomeoneWatchingSomeoneDoingSomething() {
  const something = await watchOverSomeoneDoingSomething()
  return something + ' and I watched as well'
}
watchOverSomeoneWatchingSomeoneDoingSomething().then((res) => {
  console.log(res)
})

printM('STRING PADDING')
printS('`test`.padStart(4) : ' + `test`.padStart(4))
printS('`test`.padStart(5) : ' + `test`.padStart(5))
printS('`test`.padStart(8,`abcde`) : ' + `test`.padStart(8,`abcdefg`))

const numbers = [1, 2, 3, 4, 5, 6, 7] //can exceed but not less than which lead to  NaN
const sum = (a, b, c, d, e) => a + b + c + d + e
printS(sum(...numbers))

var asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return Promise.resolve({ value: this.i++, done: false });
        }

        return Promise.resolve({ done: true });
      }
    };
  }
};

(async function() {
   for await (num of asyncIterable) {
     console.log(num);
   }
})();// 0 1 2

const re = /Roger(?= Waters)/;
printS(re.test('Roger is my dog') )//false
printS(re.test('Roger is my dog and Roger Waters is a famous musician') )//true

const reD = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
const result = reD.exec('2015-01-02')
printS(` ${result.groups.year} /${result.groups.month} /${result.groups.day}`)
// result.groups.year === '2015';
// result.groups.month === '01';
// result.groups.day === '02';

printS(/hi.welcome/.test('hi\nwelcome') )// false
printS(/hi.welcome/s.test('hi\nwelcome') )// true
 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class App extends Component {

  render() {
    return ( <div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
        </a>
        <h1>
            Hello, {formatName(user)}!
        </h1>
        <h2>check console for output, thank you</h2>
    </header>


</div>



    );
  }
}

export default App;