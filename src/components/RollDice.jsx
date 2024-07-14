/* eslint-disable react/prop-types */
import styled, { keyframes } from "styled-components";

const RollDice = ({currentDice, rollDice, rolling}) => {

  return (
    <DiceContainer>
      <div className={`dice ${rolling ? "rolling" : ""}`} onClick={rollDice}>
        <img src={currentDice} alt="dice" />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const rollAnimation = keyframes`
  0% { transform: rotateX(0deg) rotateY(0deg); }
  25% { transform: rotateX(90deg) rotateY(180deg); }
  50% { transform: rotateX(180deg) rotateY(360deg); }
  75% { transform: rotateX(270deg) rotateY(540deg); }
  100% { transform: rotateX(360deg) rotateY(720deg); }
`;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  p {
    font-size: 24px;
    font-weight: 500;
  }

  .dice {
    cursor: pointer;
    img {
      width: 250px; /* Adjust size as needed */
      height: 250px; /* Adjust size as needed */
      transform-style: preserve-3d;
    }
  }

  .rolling {
    animation: ${rollAnimation} 0.6s ease-in-out;
  }
`;
