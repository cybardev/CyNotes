import MasonryList from "@react-native-seoul/masonry-list";
import tw from "twrnc";
import NoteCard from "./NoteCard";

function NotesGrid({ data }) {
  return data ? (
    <MasonryList
      style={tw`w-full h-full bg-gray-800`}
      data={data}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <NoteCard note={item} />}
      onEndReachedThreshold={0.1}
    />
  ) : (
    <></>
  );
}

export default NotesGrid;
