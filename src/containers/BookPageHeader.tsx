import React from "react";
import styled from "styled-components/macro";
import { BackBtn } from "../components";
import { unsetBook } from "../redux/actions/book";
import { useAppDispatch } from "../redux/storeHooks";

function BookPageHeader() {
   const dispatch = useAppDispatch();

   const handleGoBack = () => {
      dispatch(unsetBook());
   };

   return (
      <Wrapper>
         <Inner>
            <BackBtn onClick={handleGoBack} />

            <Label>Назад</Label>
         </Inner>
      </Wrapper>
   );
}

export default BookPageHeader;

const Wrapper = styled.div`
   border-bottom: 1px solid #262626;
`;

const Inner = styled.div`
   display: flex;
   align-items: center;
   padding: 10px;
`;

const Label = styled.p``;
