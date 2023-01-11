import {
  ImageBackground,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../../hooks/useAuth";

const Onboarding = () => {
  const navigation = useNavigation();
  const { loading } = useAuth();

  React.useEffect(() => {
    // Navigate to home screen when loading is done
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);
  }, [loading]);

  return (
    <ImageBackground
      source={require("../../assets/banner.jpeg")}
      className="flex-1 w-full object-cover"
    >
      <LinearGradient
        className="absolute top-0 bottom-0 right-0 left-0"
        colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.9)"]}
      ></LinearGradient>
      <StatusBar
        barStyle={"light-content"}
        translucent={true}
        backgroundColor="transparent"
      />
    </ImageBackground>
  );
};

export default Onboarding;
