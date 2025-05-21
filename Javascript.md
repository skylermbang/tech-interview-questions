Javascript Tech Interview Quetinos


1. Var ,Let, Const

In JavaScript, there are three ways to declare variables: var, let, and const.

🔹 var
Function-scoped

Allows redeclaration
Gets hoisted (moved to the top of its scope), but not initialized
Can lead to unexpected behavior, so it's rarely used in modern code.

🔹 let
Block-scoped
Can be reassigned but not redeclared in the same scope
Also hoisted, but not initialized — accessing it before declaration causes a ReferenceError

🔹 const
Block-scoped like let
Must be initialized at declaration
Cannot be reassigned (but if it’s an object or array, you can mutate the contents)


example 1) 
function test() {
  console.log(a); // undefined (hoisted)
  // console.log(b); // ReferenceError
  // console.log(c); // ReferenceError

  var a = 1;
  let b = 2;
  const c = 3;
}


#2 What is hoisting

Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before code is executed.

This applies to:

var declarations
Function declarations (but not expressions)

let and const are hoisted too, but they stay in a "temporal dead zone", meaning you can’t use them until they are declared.

Hoisting can lead to bugs, bad for readbility, incocististne behavior

Best way avoid var, and ust Let and const 