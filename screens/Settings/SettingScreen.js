import { RefreshControl, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuth from "../../hooks/useAuth";

const SettingScreen = () => {
  const { onRefresh, refreshing } = useAuth();
  return (
    <SafeAreaView className="w-full absolute">
      <View className="mx-4">
        <Text className="text-white text-2xl font-bold">Settings</Text>
      </View>
    </SafeAreaView>
  );
};
export default SettingScreen;
