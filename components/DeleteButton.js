import { Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useDeleteNoteMutation } from "../db";

/**
 * Button to delete active note
 *
 * @component
 * @param {Object} props component accepts navigation and note objects as props
 * @param {Object} props.navigation navigation object
 * @param {NoteObject} props.note note object
 * @returns rendered delete button
 */
function DeleteButton({ navigation, note }) {
  const [deleteNote] = useDeleteNoteMutation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.popToTop();
        deleteNote(note);
      }}
    >
      {/* wastebasket emoji */}
      <Text style={tw`text-3xl`}>&#128465;</Text>
    </TouchableOpacity>
  );
}

export default DeleteButton;
