export const setBook = (book) => ({
   type: "SET_BOOK",
   payload: book,
});

export const unsetBook = () => ({
   type: "UNSET_BOOK",
});
