import React from 'react';
import ReactDOM from 'react-dom';

import QuizBox from './QuizBox';

const App = () => {
  return (
    <div className="ui container">
      <div className="ui raised container very padded text segment">
        <div className="ui container">
          <QuizBox />
          <div className="ui divider"></div>
          <QuizBox />
          <div className="ui divider"></div>
          <QuizBox />
          <div className="ui divider"></div>
          <QuizBox />
          <div className="ui divider"></div>
          <QuizBox />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
