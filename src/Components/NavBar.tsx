import { Flex, Icon, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { NavLink as ReachLink } from 'react-router-dom';
import { AiFillBulb } from 'react-icons/ai';
import {IoMdArchive } from 'react-icons/io';
import {FaTrash } from 'react-icons/fa';


const NavBar: React.FC = () => {
    const bgColor = useColorModeValue('gray.300', 'gray.600');

  return (
    <Flex
      height="full"
      flexDir={{ base: "row", lg: "column" }}
      justifyContent={{ base:'space-between', lg:'flex-start'}}
      gap={4}
      p={{ base: "1rem", lg: "1rem" }}
    >
        <Flex>
        <Link
              as={ReachLink}
              to="/"
              display="inline-flex"
              alignItems="center"
              _hover={{ base: '', lg: { bgColor: bgColor } }}
              rounded="3xl" 
              w={{ base: '50px', lg: '170px' }}
              pl="1rem"
              _activeLink={{
                base: '',
                lg: {
                  transition: 'none',
                  fontWeight: 'bold',
                  bgColor: 'yellow.400',
                },
              }}
            >
              <Icon fontSize="1.5rem" as={AiFillBulb} />
              <Text
                p={2}
                fontSize="1.3rem"
                display={{ base: 'none', lg: 'block' }}
              >
                Notes
              </Text>
            </Link>
        </Flex>
        <Flex>
        <Link
              as={ReachLink}
              to="/archive"
              display="inline-flex"
              alignItems="center"
              _hover={{ base: '', lg: { bgColor: bgColor } }}
              rounded="3xl"
              w={{ base: '50px', lg: '170px' }}
              pl="1rem"
              _activeLink={{
                base: '',
                lg: {
                  transition: 'none',
                  fontWeight: 'bold',
                  bgColor: 'yellow.400',
                },
              }}
            >
              <Icon fontSize="1.5rem" as={IoMdArchive} />
              <Text
                p={2}
                fontSize="1.3rem"
                display={{ base: 'none', lg: 'block' }}
              >
                Archive
              </Text>
            </Link>
        </Flex>
        <Flex>
        <Link
              as={ReachLink}
              to="/trash"
              display="inline-flex"
              alignItems="center"
              _hover={{ base: '', lg: { bgColor: bgColor } }}
              rounded="3xl"
              w={{ base: '50px', lg: '170px' }}
              pl="1rem"
              _activeLink={{
                base: '',
                lg: {
                  transition: 'none',
                  fontWeight: 'bold',
                  bgColor: 'yellow.400',
                },
              }}
            >
              <Icon fontSize="1.5rem" as={FaTrash} />
              <Text
                p={2}
                fontSize="1.3rem"
                display={{ base: 'none', lg: 'block' }}
              >
                Trash
              </Text>
            </Link>
        </Flex>
    </Flex>
  );
};

export default NavBar;
