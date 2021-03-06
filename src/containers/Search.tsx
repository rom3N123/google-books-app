import React from "react";
import styled from "styled-components/macro";
import { useApi } from "../hooks";
import { Container, Input, SearchBtn } from "../components";
import { ISearchParams } from "../interfaces";
import { SelectItem } from ".";
import { useHistory } from "react-router";

const Search: React.FC = () => {
   const { findBooks } = useApi();

   const history = useHistory();

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

   const [formState, setFormState] = React.useState<ISearchParams>({
      searchValue: "",
      subject: subjects[0],
      orderBy: filters[0],
   });

   const handleSubmit = (e: React.SyntheticEvent): void => {
      e.preventDefault();

      if (!formState.searchValue) {
         return;
      }

      if (history.location.pathname !== "/") {
         history.push("/");
      }

      findBooks(formState);
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

                  <ButtonWrapper>
                     <SearchBtn />
                  </ButtonWrapper>
               </SearchInnerWrapper>

               <Filters>
                  <SelectItem
                     id="categories"
                     labelTitle="Categories"
                     onChange={handleChange}
                     options={subjects}
                     name="subject"
                  />

                  <SelectItem
                     id="order"
                     labelTitle="Order by"
                     onChange={handleChange}
                     options={filters}
                     name="orderBy"
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
   justify-content: space-around;
   align-items: center;
   margin: 25px 0 10px;
`;

const SearchInnerWrapper = styled.div`
   position: relative;
`;

const ButtonWrapper = styled.div`
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   right: 5px;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`;
