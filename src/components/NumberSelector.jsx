/* eslint-disable react/prop-types */
import styled from "styled-components";

const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  const diceNumbers = [1, 2, 3, 4, 5, 6];

  const numberSelectHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectContainer>
      <p className="error-message">{error}</p>
      <div className="flex">
        {diceNumbers.map((value, index) => {
          return (
            <Box
              isSelected={value === selectedNumber}
              key={index}
              onClick={() => numberSelectHandler(value)}
            >
              {value}
            </Box>
          );
        })}
      </div>
      <p>Select Number</p>
    </NumberSelectContainer>
  );
};

export default NumberSelector;

const NumberSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 30px;
    font-weight: 700;
  }
  .error-message {
    color: red;
    font-size: 24px;
    font-weight: 600;
  }

  @media (max-width: 580px) {
    .error-message {
      font-size: 15px;
      margin: 10px 0px;
    }
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  cursor: pointer;

  @media (max-width: 580px) {
    height: 50px;
    width: 50px;
  }
  @media (max-width: 430px) {
    height: 40px;
    width: 40px;
  }
`;
