import React from 'react';

function App() {
  type SuperPrint = {
    <T, M>(a: T[], b: M): T
  }

  const superPrint: SuperPrint = (arr) => arr[0]

  const a = superPrint([1, 2, 3, 4], "b")
  const b = superPrint([true, false, true], "b")
  const c = superPrint(["a", "b", "c"], "b")
  const d = superPrint([1, 2, true, false, "hello"], "b")

  return (
    <div>
      blockchain
    </div>
  );
}

export default App;
