import { Flex, Heading, Icon, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { GrNotes } from "react-icons/gr";

const Header: React.FC = () => {
  return (
    <Flex
      width="full"
      p={{ base: ".4rem", lg: ".8rem" }}
    //   paddingStart={2}
      justifyContent={{ base: "space-between", lg: "space-between" }}
    >
      <Link to="/">
        <Flex>
          {/* <Icon as={GrNotes} fontSize="2xl" m={2} color={"yellow.400"} /> */}
          <Heading  color={"yellow.400"}>Notes</Heading>
        </Flex>
      </Link>
      <Input type="search" w={{lg:'400px'}} />
      <ColorModeSwitcher />
    </Flex>
  );
};

export default Header;
