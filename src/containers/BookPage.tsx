import React from "react";
import styled from "styled-components/macro";
import { BookPageImage, BookPageInfo, BookPageHeader } from ".";
import { IApiBook } from "../interfaces";
import { useAppSelector } from "../redux/storeHooks";

function BookPage() {
   const book = useAppSelector((state): IApiBook => state.book);

   return (
      <Wrapper>
         <Inner>
            <BookPageHeader />

            <ItemsWrapper>
               <BookPageImage
                  thumbnail={book.volumeInfo.imageLinks?.thumbnail}
                  thumbnailAlt={book.volumeInfo.title}
               />

               <BookPageInfo
                  // className="book-page-info"
                  authors={book.volumeInfo.authors}
                  categories={book.volumeInfo.categories}
                  title={book.volumeInfo.title}
                  description={book.volumeInfo.description}
                  thumbnails={book.volumeInfo.imageLinks}
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
