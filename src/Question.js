import React from 'react';
import { unescape } from 'html-escaper';

const Question = (props) => {
  return (
    <div>
      <div className="ui header">{unescape(props.que)}</div>
      {props.children}
    </div>
  );
};

export default Question;
