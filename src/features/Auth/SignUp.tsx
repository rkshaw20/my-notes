import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link as ReachLink, useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  return (
    <Flex
      maxH='100dvh'
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={4} mx={"auto"} maxW={"xl"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading color="blue.400" fontSize={"3xl"} textAlign={"center"}>
            Create your account
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          w={'md'}
          p={8}
        >
          <Stack spacing={2}>
            {/* <form onSubmit={e => handleFormSubmit(e, userInput)}> */}

            <FormControl id="firstName" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="Name"
                // value={userInput.firstName}
                // onChange={handleUserInput}
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                // value={userInput.email}
                // onChange={handleUserInput}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  //   type={showPassword ? 'text' : 'password'}
                  name="password"
                  //   value={userInput.password}
                  //   onChange={handleUserInput}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    // onClick={() =>
                    //   setShowPassword(showPassword => !showPassword)
                    // }
                  >
                    {/* {showPassword ? <ViewIcon /> : <ViewOffIcon />} */}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="confirm-password" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  //   type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  //   value={userInput.confirmPassword}
                  //   onChange={handleUserInput}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    // onClick={() =>
                    //   setShowPassword(showPassword => !showPassword)
                    // }
                  >
                    {/* {showPassword ? <ViewIcon /> : <ViewOffIcon />} */}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                type="submit"
                // isLoading={loader ? true : false}
                loadingText="signing up"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack>
              <Text align={"center"}>
                Already a user?{" "}
                <Link color={"blue.400"} as={ReachLink} to="/login">
                  Login
                </Link>
              </Text>
            </Stack>
            {/* </form> */}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignUp;
