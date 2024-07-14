/* eslint-disable react/prop-types */
import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;

  h1 {
    font-size: 100px;
    line-height: 100px;

    @media (max-width: 580px) {
      font-size: 70px;
      line-height: 70px;
    }

    @media (max-width: 580px) {
      font-size: 60px;
      line-height: 60px;
    }
  }
  p {
    font-size: 30px;
    font-weight: 700;
  }
`;
