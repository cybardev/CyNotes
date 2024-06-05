import tw from "twrnc";
import { TouchableOpacity, Text } from "react-native";

/**
 * Button to add a new note to DB
 *
 * @component
 * @param {Object} props component accepts onPress function as props
 * @param {Function} props.onPress function to be called when button is pressed
 * @returns rendered button to add a new note
 */
function AddNoteButton({ onPress }) {
  return (
    <TouchableOpacity
      onPress={() => onPress({ title: "", content: "" })}
      style={tw`bg-blue-500 rounded-full absolute bottom-[5%] right-8 mx-auto items-center flex-1 justify-center w-12 h-12`}
    >
      <Text style={tw`text-white text-center text-3xl mt--1`}>+</Text>
    </TouchableOpacity>
  );
}

export default AddNoteButton;
