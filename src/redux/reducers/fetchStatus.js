const initialState = false;

const fetchStatus = (state = initialState, action) => {
   switch (action.type) {
      case "SET_FETCH":
         return true;

      case "UNSET_FETCH":
         return false;

      default:
         return state;
   }
};

export default fetchStatus;
