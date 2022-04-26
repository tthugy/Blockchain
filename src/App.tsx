import React from 'react';

function App() {

  type Team = "red" | "blue" | "yellow"
  type Health = 1 | 5 | 10

  type Player = {
    nickname: string,
    team: Team,
    health: Health
  }
  
  const won : Player = {
    nickname: "wonseok",
    team: "blue",
    health: 10
  }

  return (
    <div>

    </div>
  );
}

export default App;
