import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const InputRef = useRef<HTMLInputElement>(null);
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        ref={InputRef}
        placeholder="Search games..."
        variant="filled"
        borderRadius={20}
      />
    </InputGroup>
  );
};

export default SearchInput;
