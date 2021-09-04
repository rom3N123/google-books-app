import React from "react";
import styled from "styled-components/macro";

function BookItem({ bookInfo, ...props }) {
   console.log(bookInfo);
   return (
      <Wrapper {...props}>
         <Inner>
            <Thumbnail
               src={bookInfo.imageLinks.thumbnail}
               alt={bookInfo.title}
            />

            <BookInfo>
               <Category>
                  {bookInfo.categories && bookInfo.categories[0]}
               </Category>

               <Title>{bookInfo.title}</Title>

               <Author>{bookInfo.authors[0]}</Author>
            </BookInfo>
         </Inner>
      </Wrapper>
   );
}

export default BookItem;

const Wrapper = styled.div`
   background-color: #ccc;
`;

const Inner = styled.div`
   display: flex;
   flex-direction: column;
   padding: 20px;
`;

const BookInfo = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 10px;
`;

const Thumbnail = styled.img`
   height: 280px;
   object-fit: contain;
   margin: 0 auto;
   cursor: pointer;
`;

const Title = styled.h4`
   cursor: pointer;
   margin: 5px 0;
   font-size: 1.25rem;
   font-weight: 600;
`;

const Category = styled.p`
   text-decoration: underline;
   font-size: 1.12rem;
   line-height: 1.5;
   cursor: pointer;
`;

const Author = styled.p`
   color: #262626;
   font-size: 1.1rem;
   font-style: italic;
`;
