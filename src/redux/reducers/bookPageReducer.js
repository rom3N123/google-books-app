const initialState = null;

const book = (state = initialState, action) => {
   switch (action.type) {
      case "SET_BOOK":
         return action.payload;

      case "UNSET_BOOK":
         return null;

      default:
         return state;
   }
};

export default book;
