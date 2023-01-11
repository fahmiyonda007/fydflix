import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  ActivityIndicator,
  RefreshControl
} from "react-native";
import React, { useState, useEffect } from "react";
import { FeaturedRow, Header, Movie, Statusbar } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import useAuth from "../../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";

const MoviesScreen = () => {
  const navigation = useNavigation();
  const {
    popularMovies,
    topRatedMovies,
    trendingMovies,
    upcomingMovies,
    loading,
    onRefresh,
    refreshing
  } = useAuth();
  if (loading) {
    <SafeAreaView className="flex-1 bg-black grid items-center justify-center">
      <ActivityIndicator size={"large"} color={"white"} />
    </SafeAreaView>;
  }
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <FeaturedRow
          lable={"upcoming"}
          render={<Movie data={upcomingMovies} />}
          onPress={() =>
            navigation.navigate("Listing", {
              data: upcomingMovies,
              category: "upcoming"
            })}
        />
        <FeaturedRow
          lable={"trending"}
          render={<Movie data={trendingMovies} />}
          onPress={() =>
            navigation.navigate("Listing", {
              data: trendingMovies,
              category: "trending"
            })}
        />
        <FeaturedRow
          lable={"popular"}
          render={<Movie data={popularMovies} />}
          onPress={() =>
            navigation.navigate("Listing", {
              data: popularMovies,
              category: "popular"
            })}
        />
        <FeaturedRow
          lable={"top rated"}
          render={<Movie data={topRatedMovies} />}
          onPress={() =>
            navigation.navigate("Listing", {
              data: topRatedMovies,
              category: "top rated"
            })}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoviesScreen;
