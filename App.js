import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import HabitEmptyState from "./screens/HabitEmptyState";
import { Provider as PaperProvider } from "react-native-paper";

// import { createDrawerNavigator } from "@react-navigation/drawer";

// const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name = "EditProfile" component={EditProfileScreen}/>
          <Stack.Screen name = "Profile" component={ProfileScreen}/>
          <Stack.Screen name="Habit" component={HabitEmptyState} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}



