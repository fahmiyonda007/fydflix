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

const SeriesScreen = () => {
  const navigation = useNavigation();
  const {
    popular,
    topRated,
    trending,
    upcoming,
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
          render={<Movie data={upcoming} />}
          onPress={() =>
            navigation.navigate("Listing", {
              data: upcoming,
              category: "upcoming"
            })}
        />
        <FeaturedRow
          lable={"trending"}
          render={<Movie data={trending} />}
          onPress={() =>
            navigation.navigate("Listing", {
              data: trending,
              category: "trending"
            })}
        />
        <FeaturedRow
          lable={"popular"}
          render={<Movie data={popular} />}
          onPress={() =>
            navigation.navigate("Listing", {
              data: popular,
              category: "popular"
            })}
        />
        <FeaturedRow
          lable={"top rated"}
          render={<Movie data={topRated} />}
          onPress={() =>
            navigation.navigate("Listing", {
              data: topRated,
              category: "top rated"
            })}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SeriesScreen;
