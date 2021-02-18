import Tip from "./Tip";
import './TipList.css';
import React from 'react';
import ReactPaginate from 'react-paginate';
import { DefaultTips } from "../tips-home";

export default class TipList extends React.Component {
  constructor(props) {
    super(props);
    this.handlePaginationChange = this.handlePaginationChange.bind(this);
  }

  handlePaginationChange({ selected }) {
    if (selected === 0) {
      const db = { ...this.props.db, tips: DefaultTips, initialPage: selected };
      this.props.onPaginationChange(db);
      return;
    }

    fetch(`tips-${selected}.json`).then(response => response.json())
      .then((tips) => {
        const db = { ...this.props.db, tips, initialPage: selected };
        this.props.onPaginationChange(db);
      });
  }

  render() {
    const { initialPage, tips } = this.props.db;
    const { pageCount } = this.props.settings;

    return (
      <div>
        <div className="TipList">
          {tips.map((tip, index) => (<Tip key={index} tip={tip}/>))}
        </div>
        <ReactPaginate
          previousLabel={'<<'}
          nextLabel={'>>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePaginationChange}
          disableInitialCallback={true}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          initialPage={initialPage}
        />
      </div>
    );
  }
}
