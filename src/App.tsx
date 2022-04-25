import React from 'react';

function App() {

  abstract class User {
    constructor(
      protected firstName: string,
      protected lastName: string,
      protected nickname: string
    ){}
    abstract getNickName():void
    getFullName(){
      return `${this.firstName} ${this.lastName}`
    }
  }
  class Player extends User {
    getNickName(): void {
      console.log(this.nickname)
    }
  }
  const won = new Player("Wonseok", "Choi", "tthugy");

  const name = won.getFullName();

  return (
    <div>
      {name}
    </div>
  );
}

export default App;
