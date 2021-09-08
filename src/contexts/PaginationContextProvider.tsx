import React from "react";
import { IContext } from "../interfaces";

interface PaginationContextValue {
   paginationSize: number;
}

const paginationValue: PaginationContextValue = {
   paginationSize: 30,
};

export const PaginatonContext =
   React.createContext<PaginationContextValue>(paginationValue);

const PaginationContextProvider: React.FC<IContext> = ({ children }) => {
   return (
      <PaginatonContext.Provider value={paginationValue}>
         {children}
      </PaginatonContext.Provider>
   );
};

export default PaginationContextProvider;
