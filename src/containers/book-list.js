import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render () {
    return (
      <ul className="list-group col-ms-4">
        {this.renderList()}
      </ul>
    )
  }
}

// the glue bt react and redux - takes in a state and returns a container
function mapStateToProps(state) {
  // state contains the list of books and the active book
  // whatever is returned will show up as props inside of BookList
  // * whenever application state changes the container books will automatically rerender
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookList);
// this connect function takes that function and a Component and produces a containter
// the Container is the Component that is awared of the state that is contained by redux
