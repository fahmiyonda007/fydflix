import { TailwindProvider } from "tailwindcss-react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { Onboarding, MovieDetail, ListingScreen } from "./screens";
import { AuthProvider } from "./hooks/useAuth";
import TabNavigator from "./navigation/tabnavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer theme={DarkTheme} className="bg-black flex-1">
        <AuthProvider>
          <Stack.Navigator
            initialRouteName="Onboarding"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Home" component={TabNavigator} />
            <Stack.Screen name="Listing" component={ListingScreen} />
            <Stack.Group>
              <Stack.Screen
                screenOptions={{
                  animation: "slide_from_right"
                }}
                name="MovieDetail"
                component={MovieDetail}
              />
            </Stack.Group>
          </Stack.Navigator>
        </AuthProvider>
      </NavigationContainer>
    </TailwindProvider>
  );
}
