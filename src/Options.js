import React from 'react';

import Option from './Option';

let checkCorrectAnswer = (selectedIndex, correctIndex) => {
  return selectedIndex === correctIndex ? 'true' : 'false';
};

class Options extends React.Component {
  render() {
    if (this.props.choices.length > 0) {
      return (
        <div className="ui items">
          <Option
            option={this.props.choices[0]}
            correctAnswer={checkCorrectAnswer(0, this.props.correctChoice)}
          />
          <div className="ui hidden divider"></div>
          <Option
            option={this.props.choices[1]}
            correctAnswer={checkCorrectAnswer(1, this.props.correctChoice)}
          />
          <div className="ui hidden divider"></div>
          <Option
            option={this.props.choices[2]}
            correctAnswer={checkCorrectAnswer(2, this.props.correctChoice)}
          />
          <div className="ui hidden divider"></div>
          <Option
            option={this.props.choices[3]}
            correctAnswer={checkCorrectAnswer(3, this.props.correctChoice)}
          />
        </div>
      );
    }
    return <div className="ui active inline loader"></div>;
  }
}

export default Options;
