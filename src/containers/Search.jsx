import React from "react";
import styled from "styled-components/macro";
import { Container, Input, SearchBtn, Select } from "../components";
import useApi from "../hooks/useApi";

function Search() {
   const { findBooks } = useApi();

   const categories = [
      "all",
      "art",
      "biography",
      "computers",
      "history",
      "medical",
      "poetry",
   ];

   const filters = ["relevance", "newest"];

   const [formState, setFormState] = React.useState({
      searchValue: "",
      category: categories[0],
      orderBy: filters[0],
   });

   const handleSubmit = (e) => {
      e.preventDefault();

      findBooks(formState);
   };

   const handleChange = (e) => {
      setFormState({ ...formState, [e.target.name]: e.target.value });
   };

   return (
      <SearchWrapper>
         <Container>
            <Form onSubmit={handleSubmit}>
               <SearchInnerWrapper>
                  <Input
                     placeholder="Search..."
                     name="searchValue"
                     value={formState.searchText}
                     onChange={handleChange}
                  />

                  <SearchButton type="submit" />
               </SearchInnerWrapper>

               <Filters>
                  <Select
                     onChange={handleChange}
                     options={categories}
                     name="category"
                  />

                  <Select
                     name="orderBy"
                     options={filters}
                     onChange={handleChange}
                  />
               </Filters>
            </Form>
         </Container>
      </SearchWrapper>
   );
}

export default Search;

const SearchWrapper = styled.div`
   max-width: 600px;
   width: 100%;
   margin: 0 auto;
`;

const Form = styled.form`
   display: flex;
   flex-direction: column;
`;

const Filters = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 20px;
   margin: 10px 0;
`;

const SearchInnerWrapper = styled.div`
   position: relative;
`;

const SearchButton = styled(SearchBtn)`
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   right: 5px;
   height: 100%;
`;
