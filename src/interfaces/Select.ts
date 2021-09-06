interface ISelect {
   name: string;
   options: string[];
   onChange(e: React.ChangeEvent<HTMLSelectElement>): void;
}

export default ISelect;
