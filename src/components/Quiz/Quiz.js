import React, { Component } from "react";
import Question from "./Question";

var userans = null;

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      correct: "Kathmandu",
      showbtn: false,
      score: 0
    };
  }

  onRadioClickHandler = event => {
    console.log(event.target.value);
    var ans = event.target.value;
    userans = ans;
    if (userans === this.state.correct) {
      console.log("Correct Answer");
      this.setState({
        showbtn: true
      });
    } else {
      console.log("Wrong");
      this.setState({
        showbtn: true
      });
    }
  };

  onNextClickHandler = () => {
    if (userans === this.state.correct) {
      this.setState({
        score: this.state.score + 5
      });
    }
  };

  render() {
    return (
      <div className="quiz">
        <p>Score : {this.state.score}</p>
        {this.props.items.map((value, index) => {
          return (
            <Question
              key={index}
              ques={value.ques}z
              opt_a={value.opt_a}
              opt_b={value.opt_b}
              opt_c={value.opt_c}
              opt_d={value.opt_d}
              radio_fn={this.onRadioClickHandler}
            />
          );
        })}
        {this.state.showbtn ? (
          <button onClick={this.onNextClickHandler}>Next</button>
        ) : null}
      </div>
    );
  }
}

export default Quiz;
