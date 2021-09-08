import { useHistory } from "react-router";
import { IFlashMessageParams } from "../interfaces";

const useRedirect = () => {
   const history = useHistory();

   const redirect = (path: string, flashMessage: IFlashMessageParams): void => {
      history.push({
         pathname: path,
         state: {
            flashMessage,
         },
      });
   };

   return {
      redirect,
   };
};

export default useRedirect;
