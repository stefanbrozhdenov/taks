import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: [],
      questionsData: [],
      currentQuestion: {},
      isFirst: false,
      page: 0,
      isLast: false,
      countQuestions: 0,
      showPreview: false,
      preview: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/survey`).then(res => {
      const questionsData = res.data;
      const questionKeys = Object.keys(questionsData);
      if (questionKeys) {
        const currentQuestion = questionsData[questionKeys[0]];
        const isFirst = true;
        this.setState({
          questionsData,
          currentQuestion,
          isFirst,
          countQuestions: questionKeys.length - 1
        });
      }
    });
  }

  inputChange(e) {
    let index = this.state.input.indexOf(e.target.value);
    let questionResponse = [...this.state.input];
    if (index > -1) {
      questionResponse.splice(index, 1);
    }

    this.setState({
      input:
        index > -1 ? questionResponse : [...this.state.input, e.target.value]
    });
  }

  nextQuestion() {
    if (this.state.questionsData[this.state.page + 1]) {
      const currentQuestion = this.state.questionsData[this.state.page + 1];
  
      const isLast =
        this.state.page + 1 === this.state.countQuestions ? true : false;
      this.setState({
        currentQuestion,
        isFirst: false,
        page: this.state.page + 1,
        isLast
      });
    }

    const data = {
      question: this.state.currentQuestion.question,
      answers: this.state.input,
      id: this.state.currentQuestion.id
    };
    axios.post(`http://localhost:8000/survey`, { data }).then(res => {
      console.log(res);
    });
    this.setState({ input: [] });
  }

  prevQuestion() {
    if (this.state.questionsData[this.state.page - 1]) {
      const currentQuestion = this.state.questionsData[this.state.page - 1];
      let isFirst = false;
      if (this.state.page === 1) {
        isFirst = true;
      }

      this.setState({
        currentQuestion,
        isFirst,
        page: this.state.page - 1,
        isLast: false
      });
    }
  }

  previewAnsers() {
    this.nextQuestion();
    axios.get(`http://localhost:8000/survey/Stefan`).then(res => {
      this.setState({ preview: res.data, showPreview: true });
    });
  }

  render() {
    const answers = this.state.currentQuestion.answers
      ? this.state.currentQuestion.answers.split(",")
      : [];

    const preview = this.state.preview.map(function(item, i) {
      return (
        <ul>
          <li key={i}>{item.question}</li>
          <ul className="preview-box">
            {item.answers.split(",").map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </ul>
      );
    });

    return (
      <div>
        {this.state.showPreview ? (
          preview
        ) : (
          <div className="container">
            <div className="title-box">
              <h1>{this.state.currentQuestion.question}</h1>
            </div>

            <div className="question-box">
              <ul>
                {answers.map((item, index) => (
                  <li key={index}>
                    <input
                      type={this.state.currentQuestion.questionType}
                      onChange={e => this.inputChange(e)}
                      name={item}
                      value={item}
                      checked={this.state.input.includes(item)}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="button-box">
              {this.state.isFirst ? null : (
                <button
                  onClick={e => this.prevQuestion()}
                  className="button-prev"
                >
                  Prev
                </button>
              )}

              {this.state.isLast ? (
                <button
                  onClick={e => this.previewAnsers()}
                  className="button-ansers"
                >
                  Preview
                </button>
              ) : (
                <button
                  onClick={e => this.nextQuestion()}
                  className="button-next"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
