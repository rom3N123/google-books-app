import React from "react";
import styled from "styled-components/macro";
import { useDispatch, useSelector } from "react-redux";
import { BookItem, LoadMoreBtn } from "../components";
import { setBook } from "../redux/actions/book";

function BooksList({ ...props }) {
   const state = useSelector((state) => state);

   const dispatch = useDispatch();

   const handleBookClick = (book) => {
      dispatch(setBook(book));
   };

   return (
      <Wrapper {...props}>
         <Inner>
            {state.books ? (
               state.books.items.map((book) => (
                  <BookItem
                     onBookClick={() => handleBookClick(book)}
                     className="book-item"
                     bookInfo={book.volumeInfo}
                  />
               ))
            ) : (
               <p>Здесь будут отображаться книги</p>
            )}
         </Inner>

         {state.books &&
            ((!state.fetchStatus && (
               <ButtonWrapper>
                  <LoadMoreBtn />
               </ButtonWrapper>
            )) || <Loading>Загрузка..</Loading>)}
      </Wrapper>
   );
}

export default BooksList;

const Wrapper = styled.div`
   padding: 20px 0;
`;

const Inner = styled.div`
   display: flex;
   flex-wrap: wrap;

   gap: 25px;

   .book-item {
      flex: 0 0 30%;
   }
`;

const ButtonWrapper = styled.div`
   text-align: center;
   margin-top: 20px;
`;

const Loading = styled.p`
   text-align: center;
   line-height: 1.5;
   font-size: 1.3rem;
   margin: 10px 0;
`;
