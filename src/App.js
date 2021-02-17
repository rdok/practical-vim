import './App.css';
import React from 'react';
import TipList from "./components/TipList";

export default class App extends React.Component {
  state = {
    tips: []
  }

  componentDidMount() {
    fetch('tips.json').then(response => response.json())
      .then((tips) => {
       this.setState({tips})
      })
  }

  render() {
    return <div className="App" data-testid='app-test-id'>
      <TipList tips={this.state.tips}/>
    </div>;
  }
}
