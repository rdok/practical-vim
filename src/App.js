import './App.css';
import React from 'react';
import TipList from "./components/TipList";
import { DefaultTips } from "./tips-home";

export default class App extends React.Component {
  state = {
    settings: {
      pageCount: 3,
    },
    db: {
      tips: DefaultTips,
      initialPage: 0,
    }
  };

  constructor(props) {
    super(props);
    this.handleDBSave = this.handleDBSave.bind(this);
  }

  componentDidMount() {
    try {
      let db = JSON.parse(localStorage.getItem('db'));
      db && this.setState(() => ({ db }));
      // db && this.setState({ db, ...db });
      console.log('loaded', { db });
    } catch (e) {
      // loads default options
    }
  }

  handleDBSave(db) {
    this.setState(() => ({ db }));
    localStorage.setItem('db', JSON.stringify(db));
  }

  render() {
    const { settings, db } = this.state;

    return <div className="App" data-testid='app-test-id'>
      <TipList settings={settings} db={db} onPaginationChange={this.handleDBSave}/>
    </div>;
  }
}
