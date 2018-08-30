import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
        key={book.title} 
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">
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

// Anthing retured from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
// this connect function takes that function and a Component and produces a containter
// the Container is the Component that is awared of the state that is contained by redux
