import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
import dice1 from "../assets/images/dice_1.png";
import dice2 from "../assets/images/dice_2.png";
import dice3 from "../assets/images/dice_3.png";
import dice4 from "../assets/images/dice_4.png";
import dice5 from "../assets/images/dice_5.png";
import dice6 from "../assets/images/dice_6.png";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(dice1);
  const [rolling, setRolling] = useState(false);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  const genRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    setRolling(true);
    setTimeout(() => {
      if (!selectedNumber) {
        setError("* You have not selected any number");
        return;
      }

      const randomNumber = genRandomNumber(1, 7);
      setCurrentDice(diceImages[randomNumber - 1]);
      setRolling(false);

      if (selectedNumber === randomNumber) {
        setScore((prev) => prev + randomNumber);
      } else {
        setScore((prev) => prev - 2);
      }

      setSelectedNumber(undefined);
    }, 500);
  };

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice
        currentDice={currentDice}
        rollDice={rollDice}
        rolling={rolling}
      />
      <div className="btns">
        <button className="btn-reset" onClick={()=>setScore(0)}>Reset Score</button>
        <button className="btn-rule" onClick={()=>setShowRules((prev)=>!prev)}>{showRules ? "Hide" : "Show"} Rules</button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-top: 30px;
  }
  .btn-reset {
    background-color: white;
    color: black;
    min-width: 200px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px 40px;
    font-size: large;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.5s ease;
  }

  .btn-reset:hover, .btn-rule:hover{
    background-color: gray;
    color: white;
    border: 1px solid gray;
    transition: all 0.3s ease;
  }
  
  .btn-rule {
    background-color: black;
    color: white;
    min-width: 200px;
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 5px 40px;
    font-size: large;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.5s ease;
  }
  
`;
