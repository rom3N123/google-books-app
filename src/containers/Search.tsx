import React from "react";
import styled from "styled-components/macro";
import { Container, Input, SearchBtn, Select } from "../components";
import useApi from "../hooks/useApi";

const Search: React.FC = () => {
   const { findBooks } = useApi();

   const subjects = [
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
      subject: subjects[0],
      orderBy: filters[0],
   });

   const handleSubmit = (e: React.SyntheticEvent): void => {
      e.preventDefault();

      console.log(formState);

      // findBooks(formState);
   };

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
   ): void => {
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
                     value={formState.searchValue}
                     onChange={handleChange}
                  />

                  <SearchButtonWrapper>
                     <SearchBtn type="submit" />
                  </SearchButtonWrapper>
               </SearchInnerWrapper>

               <Filters>
                  <Select
                     onChange={handleChange}
                     options={subjects}
                     name="subject"
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
};

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
   margin: 25px 0 10px;
`;

const SearchInnerWrapper = styled.div`
   position: relative;
`;

const SearchButtonWrapper = styled.div`
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   right: 5px;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`;
