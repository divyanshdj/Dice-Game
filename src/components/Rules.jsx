import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <div className="rules">
        <h2>How to play Dice Game!!</h2>
        <h3>- Select any number</h3>
        <h3>- Click on dice image</h3>
        <h3>
          - after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </h3>
        <h3>- if you get wrong guess then 2 point will be deducted </h3>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;

  .rules {
    background-color: #e2eff3;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 20px;
    max-width: 60vw;
    margin-top: 20px;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
  }

  h3{
    font-weight:400;
  }

  @media (max-width: 800px) {
    .rules {
    max-width: 80vw;
  }
}
  @media (max-width: 580px) {
    .rules {
    max-width: 100vw;
  }
}
`;
