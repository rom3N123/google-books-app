import React from "react";
import styled from "styled-components/macro";

function BookPageInfo({ bookInfo, ...props }) {
   return (
      <Wrapper {...props}>
         <Inner>
            <Category>
               {bookInfo.categories && bookInfo.categories.join("/")}
            </Category>

            <Title>{bookInfo.title}</Title>

            <Authors>{bookInfo.authors && bookInfo.authors.join(", ")}</Authors>

            <Description>
               {bookInfo.description && bookInfo.description}
            </Description>
         </Inner>
      </Wrapper>
   );
}

export default BookPageInfo;

const Wrapper = styled.div``;

const Inner = styled.div`
   display: flex;
   flex-direction: column;
   padding: 20px;

   & > *:not(:last-child) {
      margin-bottom: 20px;
   }
`;

const Category = styled.p``;

const Title = styled.h3``;

const Authors = styled.p``;

const Description = styled.p`
   line-height: 1.25;
`;
