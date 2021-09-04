import React from "react";
import styled from "styled-components/macro";

function BookItem({ category, author, name, thumbnailSrc, ...props }) {
   return (
      <Wrapper>
         <Inner>
            <Thumbnail src={thumbnailSrc} alt={name} />

            <BookInfo>
               <Category>{category}</Category>

               <Name>{name}</Name>

               <Author>{author}</Author>
            </BookInfo>
         </Inner>
      </Wrapper>
   );
}

export default BookItem;

const Wrapper = styled.div``;

const Inner = styled.div`
   display: flex;
   flex-direction: column;
`;

const BookInfo = styled.div`
   display: flex;
   flex-direction: column;
`;

const Thumbnail = styled.img``;

const Name = styled.h4``;

const Category = styled.p``;

const Author = styled.p``;
