import React from 'react';
import { decode } from 'he';

const Question = (props) => {
  return (
    <div>
      <div className="ui header">{decode(props.que)}</div>
      {props.children}
    </div>
  );
};

export default Question;
