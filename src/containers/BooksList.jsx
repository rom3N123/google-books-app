import React from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import { BookItem, LoadMoreBtn } from "../components";

function BooksList({ ...props }) {
   const books = useSelector((state) => state.books);

   return (
      <Wrapper {...props}>
         <Inner>
            {books ? (
               books.items.map((book) => (
                  <BookItem className="book-item" bookInfo={book.volumeInfo} />
               ))
            ) : (
               <p>Здесь будут отображаться книги</p>
            )}
         </Inner>

         {books && (
            <ButtonWrapper>
               <LoadMoreBtn />
            </ButtonWrapper>
         )}
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
