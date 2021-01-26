import React from 'react';

const Question = (props) => {
  return (
    <div>
      <div className="ui header">{props.que}</div>
      {props.children}
    </div>
  );
};

export default Question;
