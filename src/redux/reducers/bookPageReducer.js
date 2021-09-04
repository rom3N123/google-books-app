const initialState = null;

const book = (state = initialState, action) => {
   switch (action.type) {
      case "SET__BOOK":
         return action.payload;

      case "UNSET_BOOK":
         return null;

      default:
         return state;
   }
};

export default book;
