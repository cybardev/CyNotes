import { Provider } from "react-redux";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import tw, { useDeviceContext } from "twrnc";
import { store } from "./store";
import "react-native-reanimated";
import HomeScreen from "./components/HomeScreen";
import EditScreen from "./components/EditScreen";

const Stack = createNativeStackNavigator();

function App() {
  useDeviceContext(tw);

  const navBarStyle = {
    headerStyle: tw`bg-gray-900 border-0`,
    headerTintColor: "white",
    headerTitleStyle: tw`font-bold`,
    headerShadowVisible: false, // gets rid of border on device
  };

  return (
    <Provider store={store}>
      <View style={tw`w-full h-full bg-gray-900`}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HomePage">
            <Stack.Screen
              options={{ ...navBarStyle, headerTitle: "Notes" }}
              name="HomePage"
              component={HomeScreen}
            />
            <Stack.Screen
              options={{ ...navBarStyle, headerTitle: "" }}
              name="EditPage"
              component={EditScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

export default App;
