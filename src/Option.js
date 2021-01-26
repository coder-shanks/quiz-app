import React from 'react';

const Option = (props) => {
  //Change the button color to green if answer is correct
  let checkAnswer = (e) => {
    if (props.correctAnswer === 'true') {
      document.activeElement.classList.add('green');
    }
  };

  return (
    <button className="fluid ui button large" onClick={checkAnswer}>
      <div className="item">{props.option}</div>
    </button>
  );
};

export default Option;
