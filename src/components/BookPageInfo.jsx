import React from "react";
import styled from "styled-components/macro";

function BookPageInfo({ bookInfo }) {
   return (
      <Wrapper>
         <Inner>
            <Category>Computers</Category>

            <Title>Заголовок</Title>

            <Authors>Авторы</Authors>

            <Description>Описание</Description>
         </Inner>
      </Wrapper>
   );
}

export default BookPageInfo;

const Wrapper = styled.div``;

const Inner = styled.div`
   display: flex;
   flex-direction: column;
`;

const Category = styled.p``;

const Title = styled.h3``;

const Authors = styled.p``;

const Description = styled.p``;
