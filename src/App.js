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







// const foo = function foo() {
//   //...
// }

const foo = () => {
  //...
}

// setTimeout(function() {
//   console.log('I promised to run after 1s')
//   setTimeout(function() {
//     console.log('I promised to run after 2s')
//   }, 1000)
// }, 1000);


const wait = () => new Promise((resolve, reject) => {
  setTimeout(resolve, 1000)
})

wait().then(() => {
  console.log('I promised to run after 1s')
  return wait()
})
.then(() => console.log('I promised to run after 2s'))





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
