import React, { useEffect } from "react";
import "./styles.css";
import Rock from "./icons/Rock";
import Paper from "./icons/Paper";
import Scissors from "./icons/Scissors";

const choices = [
  { id: 1, name: "Rock", component: Rock },
  { id: 2, name: "Paper", component: Paper },
  { id: 3, name: "Scissors", component: Scissors }
];

export default function App() {
  const [userChoice, setUserChoice] = React.useState(null);
  const [computerChoice, setComputerChoice] = React.useState(null);

  const handleChoice = (choice) => {
    const chosenChoice = choices.find(c => c.id === choice);
    setUserChoice(chosenChoice);
  }

  useEffect(() => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }, [])

  return (
    <div className="app">
      <div className="info">
        <h2>Rock Paper Scissors</h2>
      </div>
      <div className="wins-losses">
        <div className="wins">
          <span className="number">{0}</span>
          <span className="text">win</span>
        </div>

        <div className="losses">
          <span className="number">0</span>
          <span className="text">loss</span>
        </div>
      </div>

      <div className="choices">
        {/* choices captions */}
        <div>You</div>
        <div />
        <div>Computer</div>

        {/* buttons for my choice */}
        <div>
          <button className="rock" onClick={() => handleChoice(1)}>
            <Rock />
          </button>
          <button className="paper" onClick={() => handleChoice(2)}>
            <Paper />
          </button>
          <button className="scissors" onClick={() => handleChoice(3)}>
            <Scissors />
          </button>
        </div>

        <div className="vs">vs</div>

        {/* show the computer's choice */}
        <div>
          <button className="computer-choice">?</button>
        </div>
      </div>
    </div>
  );
}
