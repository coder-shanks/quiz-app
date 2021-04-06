import React from 'react';

import Option from './Option';
import Spinner from './Spinner';

let checkCorrectAnswer = (selectedIndex, correctIndex) => {
  return selectedIndex === correctIndex ? 'true' : 'false';
};

class Options extends React.Component {
  render() {
    const { choices, correctChoice } = this.props;

    if (choices.length > 0) {
      return (
        <div className="ui items">
          <Option
            option={choices[0]}
            correctAnswer={checkCorrectAnswer(0, correctChoice)}
          />
          <div className="ui hidden divider"></div>
          <Option
            option={choices[1]}
            correctAnswer={checkCorrectAnswer(1, correctChoice)}
          />
          <div className="ui hidden divider"></div>
          <Option
            option={choices[2]}
            correctAnswer={checkCorrectAnswer(2, correctChoice)}
          />
          <div className="ui hidden divider"></div>
          <Option
            option={choices[3]}
            correctAnswer={checkCorrectAnswer(3, correctChoice)}
          />
        </div>
      );
    }
    return <Spinner alignment="" />;
  }
}

export default Options;
