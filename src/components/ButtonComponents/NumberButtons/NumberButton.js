import React from "react";

const NumberButton = ({ name, symbol, setDisplay, display}) => {
  const buttonValue = `number-button ${ name }`;

  const buttonClick = () => {
    return setDisplay(display + symbol);
  }

  return (
    <div className={ buttonValue } onClick={() => buttonClick()}>
      { symbol }
    </div>
  );
};

export default NumberButton;