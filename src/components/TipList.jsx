import Tip from "./Tip";
import './TipList.css';
import React from 'react';
import ReactPaginate from 'react-paginate';
import { DefaultTips } from "../tips-home";

export default class TipList extends React.Component {
  state = { pageCount: 4, tips: [] };

  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    const selected = this.props.initialPage;
    this.renderTips(selected);
  }

  renderTips(selected) {
    if (selected === 0) {
      this.setState(() => ({ tips: DefaultTips }));
      return;
    }

    fetch(`tips-${selected}.json`)
      .then(response => response.json())
      .then((tips) => {
        this.setState({ tips });
      });
  }

  handlePageChange({ selected }) {
    this.props.onPageChange({ selected });
    this.renderTips(selected);
  }

  render() {
    const { tips, pageCount } = this.state;
    const { initialPage } = this.props;

    return (
      <div key={initialPage}>
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
          onPageChange={this.handlePageChange}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          initialPage={initialPage}
          disableInitialCallback={true}
        />
      </div>
    );
  }
}
