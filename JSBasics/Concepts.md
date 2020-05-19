# Javascript Concepts

### 1.Syntax Parser

A program that reads your Code and determines what it does and if the Grammar is Valid.
Compilers/Interpretors convert our Program into something that computer can understand.They are intermediates
Syntax Parser is a part of it.

### 2.Lexical Environment:

Where something sits "Physically" in th code we write.
Lexical means having to do with words or grammar.A lexical environment exists in programming languages in which where you write something is important.

Ex: A variable sits lexically inside the function.The compiler makes decision how it is going to be stored in memory

### 3.Execution Context:

It manages a particular "Lexical Environment"
Whenever a code is run in JS,it is run in an Execution COntext,
It is simply ,a wrapper ,that the JS Engine,a program that other people wrote(which parses,anayzes,verifies),wraps it!!
There are a lot of Lexical environments,which one is currently runnning is managed via execution contexts.It can contain things beyond what we have written in our code.
Base execution contest is Global Execution Context

### 4.Name/Value Pair & Objects:

A name which maps to a Unique Value.
The name may be defined more than Once ,but only can have one value in any given Context.
That value may be more name/value pairs.
Ex: Address = "221 baker street" name-value pair
An OBJECT is a collection of Name-value Pairs.
Ex: Address : {
street:10,
number:100,
Apartemtn:{
Floor:3,
Number:2
}
}

### The Global Environemnt and the Global Object:

When a code is run in JS,it is run in an Execution COntext.It wraps the code in an exection context.
The base execution context,is a Global Execution Context.
Global Execution Context creates 2 Things.
1.Global Obeject  
2.special variable,"this"
The JS engine creates these 2 things,when the code is run and wrapped in a execution context.

Ex:
1.Create an empty js file,link that to an HTMl and open it in Browser-Window.
2.Open DevTools and fire the Browser Console
->Th js file was loaded,syntax parser started and realised there is nothing to parse,since there is no code to execute in Chrome v8 engine
-> But,since it ran the JS file,an execution context was created. and thus we get a "GLOBAL OBJECT AND THIS"
-> in console,this is Window.
->The global object is Wndow,same

> When we say Global,in JS it simply means that it is not inside a Function and is available to everyone.

### Important Aspect --> Creation and Hoisting --> Execution Context:

What the Javascript does,while creating an Execution Context?

```js
b();
console.log(a);
var a = 'hello world';
function b() {
  console.log('Called b');
}
//consoles "called b"
//consoles "Undefined" for a
//THis phenomenon is referred as "Hoisting" -->
```

### Let's dig Deeper:

Variables and functions are available to some degree,even though they are created later is because the..
Execution Context is created in 2 Steps:
1.CREATION PHASE of Execution COntext:
-Global Object , "this" and outer environemnt - It recognises variables and fn - Sets up space for Variables and Fucntions in the Memory ==> "Hoisting" - For functions,in its entireity is placed in the memory,names codes everything
-But for variables,it is different. for variables,JS places a placeholder to "undefined" and assignment happens only at "Execution phase"

> undefined is the special value,special keyword ,that variables receive during the "Creation Phase" ,1st phase of creating Execution Context.setups the memory space,and puts the vale as "undefined"

2.EXECUTION PHASE:
-"Runs the Code " line by line to something that Computer can understand

```js
function b() {
  console.log('callled b!');
}
b(); //execute this

console.log(a); //execute this -This gives undefined
var a = 'hello World';
console.log(a); //execute this -This gives "hello world"
```

# Single-Threaded & Synchronous Execution.

## Single-Threaded:

"One command at a Time"
From our perspective,JS behaves in a single thread

## Synchronous-Execution:

"One at a Time"
One line of code,being executed,in the order that it appears

# Function Invocation and Execution Stack
