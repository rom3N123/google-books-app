import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import { BooksList } from ".";

function Books() {
   const state = useSelector((state) => state);

   return (
      <Wrapper>
         {state.fetchStatus ? (
            <h1>Загрузка..</h1>
         ) : (
            <>
               <h4>{123}</h4>
               <BooksList />
            </>
         )}
      </Wrapper>
   );
}

export default Books;

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
`;
