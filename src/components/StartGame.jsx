/* eslint-disable react/prop-types */
import styled from "styled-components";
import dices from "../assets/images/dices.png";

const StartGame = ({toggle}) => {
  return (
    <Container className="container">
      <div className="logo">
        <img src={dices} alt="dice-image" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button className="btn" onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
    height: 100vh;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  min-width: 250px;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 5px 40px;
  font-size: x-large;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: all 0.3s ease;
  }
`;
