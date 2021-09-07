import React from "react";
import styled from "styled-components/macro";
import SmallButton from "../components/SmallButton";

const Pagination: React.FC = () => {
   return (
      <Wrapper>
         <Inner>
            <SmallButton>1</SmallButton>
         </Inner>
      </Wrapper>
   );
};

export default Pagination;

const Wrapper = styled.div``;

const Inner = styled.div`
   display: flex;
   align-items: center;
`;
