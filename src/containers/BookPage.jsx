import React from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import { BookPageImage, BookPageInfo } from "../containers";

function BookPage() {
   const book = useSelector((state) => state.book);

   return (
      <Wrapper>
         <Inner>
            <BookPageImage
               className="book-page-image"
               bookInfo={book.volumeInfo}
            />

            <BookPageInfo
               className="book-page-info"
               bookInfo={book.volumeInfo}
            />
         </Inner>
      </Wrapper>
   );
}

export default BookPage;

const Wrapper = styled.div``;

const Inner = styled.div`
   display: flex;
   align-items: center;

   .book-page-image {
      flex: 1 0 40%;
   }

   .book-page-info {
      flex: 0 1 60%;
   }
`;
