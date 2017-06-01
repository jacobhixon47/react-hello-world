import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Hello'
    };
    this.frenchify = this.frenchify.bind(this);
    this.englishify = this.englishify.bind(this);
    this.spanishify = this.spanishify.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }
  frenchify() {
    this.setState({ greeting: 'Bonjour' });
  }
  spanishify() {
    this.setState({ greeting: 'Hola' });
  }
  englishify() {
    this.setState({ greeting: 'Hello' });
  }
  removeGreeting() {
    this.props.removeGreeting(this.props.name);
  }
  render() {
    return (
      <div className="hello-world">
        {this.state.greeting}, {this.props.name}!
        <br/>
        <button className="frenchify" onClick={this.frenchify}>Frenchify!</button>
        <br/>
        <button className="spanishify" onClick={this.spanishify}>Spanishify!</button>
        <br/>
        <button className="englishify" onClick={this.englishify}>Englishify!</button>
        <br/>
        <button className="remove" onClick={this.removeGreeting}>Remove Me!</button>
      </div>
    );
  }
}

export default HelloWorld;
