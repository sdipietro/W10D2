import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newDate: new Date() };
  
    }

  render() {
    return (
      <div>
        <h1>Clock</h1>
        <div className="clock">
        <ul className="time">
          <li>Time:</li>
          <li>{this.state.newDate.toLocaleTimeString()}</li>
        </ul>
        <ul className="date">
          <li>Date:</li>
          <li>{this.state.newDate.toDateString()}</li>
        </ul>
        </div>
        <h1>Weather</h1>
      </div>
    )
  }

  tick() {
    this.setState({ newDate: new Date() });
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  } 

  componentWillUnmount() {
    clearInterval(this.timer);
  }

}

export default Clock;

