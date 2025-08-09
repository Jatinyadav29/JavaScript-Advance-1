// Lexical Scoping

function foo() {
  let ab = 1;
  function bar() {
    console.log(ab);
    // Closures
  }
  return bar;
}

const func = foo();
func();

// dynamic scoping - Does not exist in JS

// let a = 1;

// function foo() {
//   console.log(a); // In dynamic scope: looks at caller's scope
// }

// function bar() {
//   let a = 2;
//   foo(); // Would print 2 if JS was dynamically scoped
// }

// bar();

//Uscase of closure and how variables are preserved

function countForMe() {
  let c = 10;
  return function () {
    c++;
    console.log(c);
  };
}

let CFM = countForMe();
CFM();
CFM();
CFM();
CFM();
CFM();

let CFM2 = countForMe();
CFM2();
CFM2();
CFM2();
CFM2();
CFM2();
CFM2();

function clickCounter() {
  let click = 0;
  return function () {
    if (click < 5) {
      click++;
      console.log(`Clicked : ${click} time's`);
    } else {
      console.error("Limit reached, Try again later");
    }
  };
}

let click = 0;

let CC = clickCounter();
CC();
CC();
CC();
CC();
CC();
CC();
