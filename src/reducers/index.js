import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  books: BooksReducer
  // this reducer will add a key to the Global application state called 'books' and the value is from BooksReducer
});



export default rootReducer;
