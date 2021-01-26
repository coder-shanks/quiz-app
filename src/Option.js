import React from 'react';
import { unescape } from 'html-escaper';

class Option extends React.Component {
  //Change the button color to green if answer is correct
  checkAnswer = () => {
    if (this.props.correctAnswer === 'true') {
      document.activeElement.classList.add('green');
    } else {
      document.activeElement.classList.add('red');
    }

    document.activeElement.parentElement
      .querySelectorAll('button')
      .forEach((btn) => {
        if (!(btn.classList.contains('green') || btn.classList.contains('red')))
          btn.disabled = true;
      });
  };

  render() {
    return (
      <button className="fluid ui button large" onClick={this.checkAnswer}>
        <div className="item">{unescape(this.props.option)}</div>
      </button>
    );
  }
}

export default Option;
