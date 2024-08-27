import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatfroms";

interface Props {
  onSelectedPlatfrom: (platfrom: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatfromSelector = ({ onSelectedPlatfrom, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platfrom) => (
          <MenuItem
            key={platfrom.id}
            onClick={() => onSelectedPlatfrom(platfrom)}
          >
            {platfrom.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatfromSelector;
