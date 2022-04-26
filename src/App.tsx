import React from 'react';

function App() {

  abstract class User {
    constructor(
      protected firstName: string,
      protected lastName: string
    ){}
    abstract sayHi(name: string): string
    abstract fullName(): string
  }

  class Player extends User {
    fullName(){
      return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string){
      return `Hello ${name}. My name is ${this.fullName()}`
    }
  }

  return (
    <div>

    </div>
  );
}

export default App;
