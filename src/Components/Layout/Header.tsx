import { Divider, Flex, Heading, Icon, Input } from "@chakra-ui/react";
import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { GrNotes } from "react-icons/gr";
import { useDispatch } from "react-redux";
import {  searchNotes } from "../../features/Notes/noteSlice";

const Header: React.FC = () => {
  const [input, setInput] = useState<string>("");

 const dispatch = useDispatch();

 useEffect(()=>{
  // if(input.trim()){    
    dispatch(searchNotes(input))
  // } 
 },[input])
 
  

  return (
    <Flex flexDir='column' 
          p={{ base: ".4rem 0", lg: ".8rem 0" }}

    >
<Flex
      width="full"
      //   paddingStart={2}
      justifyContent={{ base: "space-between", lg: "space-between" }}
    >
      <Link to="/">
        <Flex p='0 1rem' >
          <Heading color={"yellow.400"}>Notes</Heading>
        </Flex>
      </Link>
      <Input
        type="search"
        w={{ lg: "400px" }}
        placeholder="search..."
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <ColorModeSwitcher />
    </Flex>
    <Divider/>
    </Flex>
    
  );
};

export default Header;
