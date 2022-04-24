import React from 'react';

function App() {
  type SuperPrint = {
    <T>(arr: T[]): void
  }

  const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
  }

  superPrint([1, 2, 3, 4])
  superPrint([true, false, true])
  superPrint(["a", "b", "c"])
  superPrint([1, 2, true, false, "hello"])

  return (
    <div>
      blockchain
    </div>
  );
}

export default App;
