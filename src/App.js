import './App.css';
import React from 'react';
import TipList from "./components/TipList";

export default class App extends React.Component {
  state = { initialPage: 0 };

  componentDidMount() {
    try {
      let db = JSON.parse(localStorage.getItem('tip_list'));
      db && this.setState(() => ({ ...db }));
    } catch (e) {
      // loads default options
    }
  }

  handlePageChange({ selected }) {
    const db = {initialPage: selected}
    localStorage.setItem('tip_list', JSON.stringify(db));
  }

  render() {
    return <div className="App" data-testid='app-test-id'>
      <TipList
        key={this.state.initialPage}
        initialPage={this.state.initialPage}
        onPageChange={this.handlePageChange}
      />
    </div>;
  }
}
