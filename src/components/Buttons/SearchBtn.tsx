import { IconButton } from "..";
import SearchIcon from "@material-ui/icons/Search";

const SearchBtn: React.FC<React.HtmlHTMLAttributes<HTMLButtonElement>> = ({
   ...props
}) => {
   return (
      <IconButton type="submit" width="30px" height="30px" {...props}>
         <SearchIcon style={{ fontSize: "2.2rem" }} />
      </IconButton>
   );
};

export default SearchBtn;
