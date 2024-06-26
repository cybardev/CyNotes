import { View, TextInput } from "react-native";
import tw from "twrnc";

/**
 * Search bar to search for note containing input text
 *
 * @component
 * @param {Object} props component accepts onChangeText function as props
 * @param {Function} props.onChangeText function to be called when text is changed
 * @returns rendered search bar
 */
function SearchBar({ onChangeText }) {
  return (
    <View style={tw`p-1.5 bg-gray-900`}>
      <TextInput
        style={tw`h-10 px-2 bg-gray-700 text-white rounded-lg`}
        placeholderTextColor="white"
        placeholder="Search"
        onChangeText={onChangeText}
      />
    </View>
  );
}

export default SearchBar;
