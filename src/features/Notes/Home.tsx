import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import NoteCard from "../../Components/NoteCard";
import NoteModal from "../../Components/NoteModal";
import { FaFileImage } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface UseDisclosureReturn {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
const Home: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure() as UseDisclosureReturn;
  //     const disclosure: UseDisclosureReturn = useDisclosure();
  // const { isOpen, onOpen, onClose } = disclosure;

  const homeNotes = useSelector((store: RootState) => store.note.home);

  return (
    <Flex flexDir="column" alignItems="center">
      <Flex>
        <InputGroup>
          <Input
            placeholder="Take a note..."
            onClick={onOpen}
            focusBorderColor="yellow.400"
            w={{ base: "300px", lg: "500px" }}
          />
        </InputGroup>
        <NoteModal isOpen={isOpen} onClose={onClose} />
      </Flex>
      <Flex flexWrap="wrap">
        {homeNotes.map((note) => (
          <NoteCard key={note._id} note={note} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Home;
