interface Input {
   placeholder?: string;
   name: string;
   value: string;
   onChange(e: React.ChangeEvent): void;
}

export default Input;
