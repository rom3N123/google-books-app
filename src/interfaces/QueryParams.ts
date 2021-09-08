interface IQueryParams {
   q: string;
   startIndex: number | undefined | null;
   orderBy: string;
   maxResults: number;
}

export default IQueryParams;
