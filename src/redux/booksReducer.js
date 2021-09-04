const initialState = {
   books: null,
};

const books = (state = initialState, action) => {
   switch (action.type) {
      case "SET_BOOKS":
         return { ...state, books: action.payload };

      default:
         return state;
   }
};

export default books;
