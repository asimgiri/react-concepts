import React, { Component } from "react";

class Question extends Component {
  render() {
    return (
      <div className="question">
        <p>{this.props.ques}</p>
        <form>
          <input
            type="radio"
            name="city"
            value="Kathmandu"
            onClick={this.props.radio_fn}
          />
          {this.props.opt_a}
          <input
            type="radio"
            name="city"
            value="Lalitpur"
            onClick={this.props.radio_fn}
          />
          {this.props.opt_b}
          <input
            type="radio"
            name="city"
            value="Bhaktapur"
            onClick={this.props.radio_fn}
          />
          {this.props.opt_c}
          <input
            type="radio"
            name="city"
            value="Butwal"
            onClick={this.props.radio_fn}
          />
          {this.props.opt_d}
        </form>
      </div>
    );
  }
}

export default Question;
