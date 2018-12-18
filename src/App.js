import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'TK',
  lastName: 'Teh'
};


console.log('ECMASCRIPT START HERE -------------------------------------------------');

console.log("['a', 'b', 'c'].includes('a') : " + ['a', 'b', 'c'].includes('a'));
console.log("['a', 'b', 'c'].indexOf('b') : " + ['a', 'b', 'c'].indexOf('b'));

console.log("('test').includes('s') : " + ('test').includes('s'));
console.log("('test').indexOf('s') : " + ('test').indexOf('s'));

console.log("[NaN].includes(NaN) : " + [NaN].includes(NaN));
console.log("[NaN].indexOf(NaN) : " + [NaN].indexOf(NaN));

console.log('2**3 : '+ 2**3); 
console.log('Math.pow(2, 3) : '+ Math.pow(2,3)); 

let num = 3; 
console.log('let num = 3');
console.log('num **= 2 : '+ (num **= 2));

setTimeout(function() {
  console.log('I promised to run after 1s')
  setTimeout(function() {
    console.log('I promised to run after 2s')
  }, 1000)
}, 1000)
 
const wait = () => new Promise((resolve, reject) => {
  setTimeout(resolve, 1000)
})

wait().then(() => {
  console.log('I promised to run after 1s')
  return wait()
})
.then(() => console.log('I promised to run after 2s'))

function* generator(i) {
  yield i;
  yield i + 10;
  yield i - 10;
  yield i + 30;
}

var gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


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

console.log(tomCruise.hello());
console.log(tomCruise.fullName);

const joe = 'test'
const test = `something ${joe}` //something test

console.log(test);

const foo=() => {
  return false;
}

console.log(`something ${1 + 2 + 3}`);
console.log(`something ${foo() ? 'x' : 'y' }`);

const printOut = `Hey
this
multi 

line


string

is awesome!`;

console.log(printOut);

const a = [1, 2, 3]
const b = [...a, 4, 5, 6]
const c = [...a]

console.log('a :' + a);
console.log('[...a, 4, 5, 6] :' + b);
console.log('[...a] :' + c);

const hey = 'hey'
const arrayized = [...hey] // ['h', 'e', 'y']

console.log('[...hey] :'  +[...hey] );
 
const f = (n1, n2, n3) => {
  console.log(`${n1}  ${n2}  ${n3}  : ` + n1+n2+n3);
}
f(...a);

var aa, bb, rest;
[aa, bb] = [10, 20];

console.log(a);
// expected output: 10

[aa, bb, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);

const person = {
  firstName: 'Tom',
  lastName: 'Cruise',
  actor: true,
  age: 54, //made up
}

const {firstName: name, age} = person

console.log(age); //54



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class App extends Component {

  render() {
    return (
      <div className="App">
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
      </header>
  
  
  </div>

      
    );
  }
}

export default App;
