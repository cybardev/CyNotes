import { Platform, Text, TouchableOpacity, View } from "react-native";
import { useLinkProps } from "@react-navigation/native";
import tw from "twrnc";

function NoteCard({ note }) {
  const { onPress, ...props } = useLinkProps({
    to: {
      screen: "NotePage",
      params: { data: note },
    },
  });

  const innerJSX = (
    <>
      <Text style={tw`text-white text-2xl mb-0.5`}>{note.title}</Text>
      <Text style={tw`text-white`}>{note.content}</Text>
    </>
  );

  // It's important to use a `View` or `Text` on web instead of `TouchableX`
  // Otherwise React Native for Web omits the `onClick` prop that's passed
  // You'll also need to pass `onPress` as `onClick` to the `View`
  // You can add hover effects using `onMouseEnter` and `onMouseLeave`
  // source: https://reactnavigation.org/docs/use-link-props
  return Platform.OS === "web" ? (
    <View
      style={tw`m-0.5 rounded-lg p-2 bg-gray-700`}
      onClick={onPress}
      {...props}
    >
      {innerJSX}
    </View>
  ) : (
    <TouchableOpacity
      style={tw`m-0.5 rounded-lg p-2 bg-gray-700`}
      onPress={onPress}
      {...props}
    >
      {innerJSX}
    </TouchableOpacity>
  );
}

export default NoteCard;
