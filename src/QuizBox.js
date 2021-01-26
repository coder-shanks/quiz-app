import React from 'react';
import axios from 'axios';

import Question from './Question';
import Options from './Options';

let question = '';
let answers = [];
let correctIndex = 0;

const API_URL = 'https://opentdb.com/api.php?amount=1&type=multiple';

class QuizBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
      answerData: [],
      correctAnswer: '',
      errorData: {},
    };

    axios.get(API_URL).then(
      (successData) => {
        question = successData.data.results.map((loadedQuestion) => {
          answers = [...loadedQuestion.incorrect_answers];
          let randomIndex = Math.floor(Math.random() * 3);
          correctIndex = randomIndex;
          answers.splice(randomIndex, 0, loadedQuestion.correct_answer);
          this.setState({
            answerData: answers,
            correctAnswer: loadedQuestion.correct_answer,
          });
          return loadedQuestion.question;
        });

        this.setState({ question: question.toString() });
      },
      (errorData) => {
        console.log(errorData);
        this.setState({ errorData: errorData });
      }
    );
  }

  render() {
    if (this.state.question !== '') {
      return (
        <Question que={this.state.question}>
          <Options
            choices={this.state.answerData}
            correctChoice={correctIndex}
          />
        </Question>
      );
    }
    return <div className="ui active centered inline loader"></div>;
  }
}

export default QuizBox;
