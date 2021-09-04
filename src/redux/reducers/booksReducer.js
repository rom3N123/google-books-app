const initialState = null;

const books = (state = initialState, action) => {
   switch (action.type) {
      case "SET_BOOKS":
         return { ...action.payload };

      default:
         return state;
   }
};

export default books;
