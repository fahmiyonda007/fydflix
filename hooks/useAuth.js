import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback
} from "react";
import { route } from "../routes";
import axios from "axios";

const AuthContext = createContext({});

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [nowPlayingMovies, setnowPlayingMovies] = useState([]);
  const [popularMovies, setpopularMovies] = useState([]);
  const [topRatedMovies, settopRatedMovies] = useState([]);
  const [upcomingMovies, setupcomingMovies] = useState([]);
  const [trendingMovies, settrendingMovies] = useState([]);

  const getData = async () => {
    try {
      const nowPlayingMovies = await axios.get(route.now_playing_movies);
      const popularMovies = await axios.get(route.popular_movies);
      const topRatedMovies = await axios.get(route.top_rated_movies);
      const upcomingMovies = await axios.get(route.upcoming_movies);
      const trendingMovies = await axios.get(route.trending_movies);

      setnowPlayingMovies(nowPlayingMovies.data.results);
      setpopularMovies(popularMovies.data.results);
      settopRatedMovies(topRatedMovies.data.results);
      setupcomingMovies(upcomingMovies.data.results);
      settrendingMovies(trendingMovies.data.results);
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const memoedValue = useMemo(
    () => ({
      loading,
      onRefresh,
      refreshing,
      nowPlayingMovies,
      popularMovies,
      topRatedMovies,
      upcomingMovies,
      trendingMovies
    }),
    [
      loading,
      onRefresh,
      refreshing,
      nowPlayingMovies,
      popularMovies,
      topRatedMovies,
      upcomingMovies,
      trendingMovies
    ]
  );
  return (
    <AuthContext.Provider value={memoedValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
