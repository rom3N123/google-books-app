import React from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import { BooksList } from ".";
import { Container } from "../components";

function Books() {
   const state = useSelector((state) => state);

   return (
      <Wrapper>
         <Container>
            {state.fetchStatus ? (
               <h1>Загрузка..</h1>
            ) : (
               <>
                  <h4>{123}</h4>
                  <BooksList />
               </>
            )}
         </Container>
      </Wrapper>
   );
}

export default Books;

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
`;
