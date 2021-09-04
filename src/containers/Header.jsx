import React from "react";
import styled from "styled-components/macro";
import Search from "./Search";
import { Container } from "../components";

function Header() {
   return (
      <Wrapper>
         <Container>
            <Inner>
               <Title>Search for books</Title>

               <Search />
            </Inner>
         </Container>
      </Wrapper>
   );
}

export default Header;

const Wrapper = styled.header`
   background: url("/header-wallpaper.jpg") center/cover no-repeat;
`;

const Inner = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-content: center;
   padding: 20px 0;
`;

const Title = styled.h3`
   text-align: center;
   font-size: 2rem;
   color: #000;
   letter-spacing: 0.5px;
   color: #fff;
   font-weight: 300;
   letter-spacing: 1px;
   margin-bottom: 20px;
`;
