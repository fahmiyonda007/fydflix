import {
  View,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AppStatusbar from "./Statusbar";
import { LinearGradient } from "expo-linear-gradient";
import useAuth from "../hooks/useAuth";
import { truncate } from "../utils";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  const { nowPlayingMovies } = useAuth();
  let random = Math.floor(Math.random() * nowPlayingMovies.length);
  const [movie, setMovie] = React.useState(nowPlayingMovies[random]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      random = Math.floor(Math.random() * nowPlayingMovies.length);
      setMovie(nowPlayingMovies[random]);
    }, 20000);
    return () => clearInterval(interval);
  }, [nowPlayingMovies]);

  return (
    <>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/original${movie?.poster_path}`,
        }}
        className="px-4 py-2 object-cover h-96"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.5)", "rgba(0,0,0,1)"]}
          className="absolute inset-0"
        >
          <SafeAreaView className="w-full absolute bottom-3">
            <View className="mx-4">
              <Text className="text-white text-2xl font-bold">
                {truncate(movie?.title, 29)}
              </Text>
              <Text className="text-gray-100 text-sm font-bold mb-2">
                {truncate(movie?.overview, 79)}
              </Text>
              <View className="flex-row items-center gap-3">
                <TouchableOpacity
                  activeOpacity={0.9}
                  className="bg-green-500 w-20 items-center justify-center flex-row py-2 rounded-full"
                >
                  <AntDesign name="play" size={15} color="white" />
                  <Text className="ml-2 text-white text-sm font-bold">
                    Play
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.9}
                  className="border-2 border-white w-24 items-center justify-center flex-row py-2 rounded-full"
                >
                  <AntDesign name="plus" size={15} color="white" />
                  <Text className="ml-2 text-white text-sm font-bold">
                    My list
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
      <AppStatusbar
        translucent={true}
        style="light"
        backgroundColor={"transparent"}
      />
    </>
  );
};

export default Header;
