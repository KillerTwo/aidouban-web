import { type } from '../action';
const initialState = {
    bookDetails: {

    }
}
  
export default (state = initialState, action)=>{
    switch (action.type) {
      case type.BOOK_DETAIL:
        return {
          ...state,
          bookDetails: action.bookDetails
        };
      default:
        break;
    }
  }