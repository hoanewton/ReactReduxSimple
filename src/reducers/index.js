import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  // this reducer will add a key to the Global application state called 'books' and the value is from BooksReducer
  books: BooksReducer,
  activeBook: ActiveBook
});



export default rootReducer;
