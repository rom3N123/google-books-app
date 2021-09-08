import { Grow } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components/macro";
import { BackBtn } from "../components";

const BookPageHeader: React.FC = () => {
   const history = useHistory();

   const handleGoBack = () => {
      history.push("/");
   };

   return (
      <Wrapper>
         <Grow in={true}>
            <Inner onClick={handleGoBack}>
               <BackBtn className="back-icon" />

               <Label>Back</Label>
            </Inner>
         </Grow>
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
