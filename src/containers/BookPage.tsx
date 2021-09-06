import React from "react";
import styled from "styled-components/macro";
import { BookPageImage, BookPageInfo, BookPageHeader } from ".";
import { BookType } from "../redux/reducers/bookPageReducer";
import { useAppSelector } from "../redux/storeHooks";

function BookPage() {
   const book = useAppSelector((state): BookType => state.book);

   return (
      <Wrapper>
         <Inner>
            <BookPageHeader />

            <ItemsWrapper>
               <BookPageImage
                  thumbnail={
                     (book!.imageLinks && book!.imageLinks.thumbnail) || ""
                  }
                  thumbnailAlt={book!.title}
               />

               <BookPageInfo
                  // className="book-page-info"
                  authors={book!.authors}
                  categories={book!.categories}
                  title={book!.title}
                  description={book!.description}
                  imageLinks={book!.imageLinks}
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
