import { useEffect, useState } from "react";
import { View } from "react-native";
import tw from "twrnc";
import { useAddNoteMutation, useSearchNotesQuery } from "../db";
import AddNoteButton from "./AddNoteButton";
import NotesGrid from "./NotesGrid";
import SearchBar from "./SearchBar";

/**
 * Home screen of the app
 *
 * @component
 * @param {Object} props component accepts navigation object as props
 * @param {Object} props.navigation navigation object
 * @returns rendered home screen
 */
function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: searchData } = useSearchNotesQuery(searchQuery);
  const [addNote, { data: addNoteData }] = useAddNoteMutation();

  /**
   * navigate to edit page when new note is added
   */
  useEffect(() => {
    if (addNoteData != undefined) {
      navigation.navigate("NotePage", { data: addNoteData });
    }
  }, [addNoteData]);

  return (
    <View style={tw`w-full h-full bg-gray-800`}>
      <SearchBar onChangeText={setSearchQuery} />
      <NotesGrid data={searchData} />
      <AddNoteButton onPress={addNote} />
    </View>
  );
}

export default HomeScreen;
