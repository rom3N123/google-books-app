import React from "react";
import styled from "styled-components/macro";
import { BackBtn } from "../components";

function BookPageHeader() {
   return (
      <Wrapper>
         <Inner>
            <BackBtn />

            <Label>Назад</Label>
         </Inner>
      </Wrapper>
   );
}

export default BookPageHeader;

const Wrapper = styled.div``;

const Inner = styled.div`
   display: flex;
   align-items: center;
`;

const Label = styled.p``;
