import React from "react";
import styled from "styled-components/macro";
import { BackBtn } from "../components";
import { UNSET_BOOK } from "../redux/reducers/bookPageReducer";
import { useAppDispatch } from "../redux/storeHooks";

const BookPageHeader: React.FC = () => {
   const dispatch = useAppDispatch();

   const handleGoBack = () => {
      dispatch(UNSET_BOOK());
   };

   return (
      <Wrapper>
         <Inner onClick={handleGoBack}>
            <BackBtn className="back-icon" />

            <Label>Back</Label>
         </Inner>
      </Wrapper>
   );
};

export default BookPageHeader;

const Wrapper = styled.div`
   border-bottom: 1px solid #262626;
   display: flex;
`;

const Inner = styled.div`
   display: flex;
   align-items: center;
   padding: 10px;
   cursor: pointer;

   transition: all 0.2s ease;

   &:hover {
      & > .back-icon {
         transform: translateX(-5px);
      }
   }
`;

const Label = styled.p`
   margin-left: 10px;
   font-size: 1.3rem;
`;
