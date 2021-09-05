import { IApiBook } from ".";

interface IBooksStore {
   totalItems: number;
   items: IApiBook[];
}

export default IBooksStore;
