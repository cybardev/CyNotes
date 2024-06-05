import MasonryList from "@react-native-seoul/masonry-list";
import tw from "twrnc";
import NoteCard from "./NoteCard";

/**
 * Grid layout to display notes
 *
 * @component
 * @param {Object} props component accepts note object and renderItem function as props
 * @param {NoteObject[]} props.data array of note objects
 * @returns rendered note grid
 */
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
