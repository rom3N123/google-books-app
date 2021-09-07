import React from "react";
import styled from "styled-components/macro";
import ArrowBtn from "../components/Buttons/ArrowBtn";
import SmallButton from "../components/SmallButton";
import { useAppSelector } from "../redux/storeHooks";

const Pagination: React.FC = () => {
   const foundResults = useAppSelector((state) => state.books.totalItems);

   const [paginationItems, setPaginationItems] = React.useState<null[]>([]);

   const [maxVisibleIndex, setMaxVisibleIndex] = React.useState(10);
   const [minVisibleIndex, setMinVisibleIndex] = React.useState(
      maxVisibleIndex - 10
   );

   React.useEffect(() => {
      if (foundResults) {
         let calculatedItems = Math.round(foundResults / 30);

         let arr: null[] = Array(calculatedItems).fill(null);

         setPaginationItems(arr);
      }
   }, [foundResults]);

   return (
      <Wrapper>
         <Inner>
            <ArrowBtn direction="left" />

            <PaginationItemsWrapper>
               {paginationItems
                  .slice(minVisibleIndex, maxVisibleIndex)
                  .map((item, index) => (
                     <SmallButton key={index}>{index + 1}</SmallButton>
                  ))}
            </PaginationItemsWrapper>

            <ArrowBtn direction="right" />
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

const PaginationItemsWrapper = styled.div`
   display: flex;
   align-items: center;
   margin: 0 10px;

   & > *:not(:last-child) {
      margin-right: 10px;
   }
`;
