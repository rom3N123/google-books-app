import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import { BooksList } from ".";

function Books() {
   const areBooksFetching = useSelector((state) => state.fethcStatus);

   return (
      <Wrapper>
         <h4>Found 500 results</h4>

         {areBooksFetching ? <h1>Загрузка..</h1> : <BooksList />}
      </Wrapper>
   );
}

export default Books;

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
`;
