import React from 'react';

function App() {

  type Player<T> = {
    name: string
    extraInfo: T
  }

  type WonExtra = {
    favFood: string
  }

  type WonPlayer = Player<WonExtra>

  const won: WonPlayer = {
    name: "wonseok",
    extraInfo: {
      favFood: "meat"
    }
  }

  const lynn: Player<null> = {
    name: "lynn",
    extraInfo: null
  }

  return (
    <div>
      blockchain
    </div>
  );
}

export default App;
