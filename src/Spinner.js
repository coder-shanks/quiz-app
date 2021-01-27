import React from 'react';

const Spinner = (props) => {
  return <div className={`ui active inline ${props.alignment} loader`}></div>;
};

export default Spinner;
