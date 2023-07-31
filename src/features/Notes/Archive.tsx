import { Flex, Heading } from "@chakra-ui/react"
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import NoteCard from "../../Components/NoteCard";



const Archive: React.FC=()=>{

    const archiveNotes= useSelector((store: RootState) => store.note.archive);
    return(
        <Flex flexDir="column" alignItems="center">
        <Flex flexWrap="wrap">
          {archiveNotes.map((note) => (
            <NoteCard key={note._id} note={note} isArchive />
          ))}
        </Flex>
      </Flex>    )
}
export default Archive