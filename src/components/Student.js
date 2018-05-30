import React, { Component } from 'react';

class Student extends Component {
  onPresentButtonClicked = () => {
    console.log("Got a click");

    // Use the callback function that was passed via props
    // pass in our index as an argument
    this.props.markPresentCallback(this.props.studentIndex);
  }

  render() {
    const studentName = this.props.name;
    const studentEmail = this.props.email;

    return (
      <section>
        <ul>
          <li>Name: { studentName } </li>
          <li>Email: { studentEmail }</li>
          <li>Grade: { this.props.grade }</li>
          <li>Present: { this.props.present.toString() }</li>
          <li>
            <button
              onClick={this.onPresentButtonClicked}
              >
              Mark Present
            </button>
          </li>
        </ul>
      </section>
    );
  }
}

export default Student;
