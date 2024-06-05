import { Text, TouchableOpacity } from "react-native";
import { useLinkProps } from "@react-navigation/native";
import tw from "twrnc";

/**
 * Card showing note data
 *
 * @component
 * @param {Object} props component accepts note object as props
 * @param {NoteObject} props.note note object
 * @returns rendered note card
 */
function NoteCard({ note }) {
  /**
   * navigate to note edit page when card is pressed
   */
  const { onPress, ...props } = useLinkProps({
    to: {
      screen: "EditPage",
      params: { data: note },
    },
  });

  return (
    <TouchableOpacity
      style={tw`m-0.5 rounded-lg p-2 bg-gray-700`}
      onPress={onPress}
      {...props}
    >
      <Text style={tw`text-white text-2xl mb-0.5`}>{note.title}</Text>
      <Text style={tw`text-white`}>{note.content}</Text>
    </TouchableOpacity>
  );
}

export default NoteCard;
