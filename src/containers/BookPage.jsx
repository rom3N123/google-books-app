import React from "react";
import styled from "styled-components/macro";
import { BookPageImage, BookPageInfo, BookPageHeader } from "../containers";
import { useAppSelector } from "../redux/storeHooks";

function BookPage() {
   const book = useAppSelector((state) => state.book);

   return (
      <Wrapper>
         <Inner>
            <BookPageHeader />

            <ItemsWrapper>
               <BookPageImage
                  className="book-page-image"
                  bookInfo={book.volumeInfo}
               />

               <BookPageInfo
                  className="book-page-info"
                  bookInfo={book.volumeInfo}
               />
            </ItemsWrapper>
         </Inner>
      </Wrapper>
   );
}

export default BookPage;

const Wrapper = styled.div``;

const Inner = styled.div`
   display: flex;
   flex-direction: column;

   .book-page-image {
      flex: 1 0 40%;
   }

   .book-page-info {
      flex: 0 1 60%;
   }
`;

const ItemsWrapper = styled.div`
   display: flex;
   align-items: center;
`;
