# Topics to Discuss:

- Javascript Engine
- Javascript Runtime
- Interpreter/Complier/JIT complier
- Writing Optimized Codes
- Call-Stack + Memory Heap
- Stack-Overflow + Memory Leaks
- Garbage Collection
- NodeJS
- Single Threaded Model
  
#### Javascript Engine
- A JavaScript engine is a computer program that executes JavaScript code
- Opera's Carakan, IE's chakra, Mozilla's SpiderMonkey , **Google's V8-Engine** 
- **Brenden Eich** created the first JS-Engine, SpiderMonkey when he was in Netscape.

```javascript
function jsengine(code){
    return code.split(/\s+/)
}
jsengine("var a=5") // Gives ["var","a","=","5"]
```
![image](https://images.ctfassets.net/aq13lwl6616q/3o7Q3edCrVJG9Zzj6VMZ1K/28136a643636dfa04090f3fb5c5467ff/javascript_engine.png)

##### Interpreters and Compilers
- These  are the Two ways to run Javascript
- **Interpreters**: 
  -  An interpreter will typically generate an efficient intermediate representation and immediately evaluate it.
  -   Depending on the interpreter, the intermediate representation can be an AST
- **Compilers**: 
  - compiler is a program that translates code written in a high-level programming language (like JavaScript) into low-level code (like Assembly) directly executable by the computer or another program such as a virtual machine.
>  The main difference is that an interpreter directly executes the instructions in the source programming language 
> while a compiler translates those instructions into efficient machine code.

##### Babel + Typescript:

- Babel: It is a Javascript Compiler that takes your modern JS Code and returns Browser compatilble JS
- TypeScript: is a Siperset of JavaScript that compiles down to JavaScript
> Both of them do exactly wheat Compilers do,that is Take one language annd convert it to another one!