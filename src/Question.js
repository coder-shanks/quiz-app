import React from 'react';
import { decode } from 'he';

const Question = ({ que, children }) => {
  return (
    <div>
      <div className="ui header">{decode(que)}</div>
      {children}
    </div>
  );
};

export default Question;
