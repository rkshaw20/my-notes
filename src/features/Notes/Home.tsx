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
  const homeNotes = useSelector((store: RootState) => store.note.home);
  const searchedInput = useSelector(
    (store: RootState) => store.note.searchInput
  );
console.log(searchedInput);


  const searchResult = searchedInput.length > 0
    ? homeNotes.filter((note) => note.title.toLowerCase().includes(searchedInput))
    : [];

    console.log(searchResult);
    

  // sorted acording to pinned, from true to false;
  // const sortedList= [...homeNotes].sort((a,b)=>b.isPinned-a.isPinned)
  const pinnedList = homeNotes.filter((note) => note.isPinned);
  const unpinnedList = homeNotes.filter((note) => !note.isPinned);

  const handleClick=()=>{
  }

  return (
    <Flex flexDir="column" alignItems="center" mt={2} gap={2} >
      <Flex>
        <InputGroup>
          <Input
            placeholder="Take a note..."
            // onClick={onOpen}
            onKeyDown={onOpen}
            focusBorderColor="yellow.400"
            w={{ base: "300px", lg: "500px" }}
          />
        </InputGroup>
        <NoteModal isOpen={isOpen} onClose={onClose} />
      </Flex>

      <Flex flexDir="column" gap={2}>
        {pinnedList.length > 0 && !searchResult.length && <Heading size="md">Pinned notes</Heading>}
        <Flex flexWrap="wrap">
          {searchResult.length > 0
            ? searchResult.map((note) => (
                <NoteCard key={note._id} note={note} />
              ))
            : pinnedList.length > 0 &&
              pinnedList.map((note) => <NoteCard key={note._id} note={note} />)}
        </Flex>
        {unpinnedList.length > 0 && !searchResult.length && <Heading size="md">Notes</Heading>}
        <Flex flexWrap="wrap">
          {!searchResult.length && unpinnedList.map((note) => (
            <NoteCard key={note._id} note={note} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
