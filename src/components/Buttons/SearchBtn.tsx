import IconButton from "./IconButton";
import searchIconSvg from "../../assets/search-icon.svg";

const SearchBtn: React.FC<{ type: string }> = ({ ...props }) => {
   return (
      <IconButton
         {...props}
         imageSrc={searchIconSvg}
         imageAlt={"Search icon"}
      />
   );
};

export default SearchBtn;
