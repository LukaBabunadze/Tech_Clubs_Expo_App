import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

const _layout = () => {
  const [user, setUser] = useState(null);

  const handleGetUser = async () => {
    const res = await AsyncStorage.getItem("user");
    return JSON.parse(res);
  };

  useEffect(() => {
    handleGetUser().then((userFromStorage) => setUser(userFromStorage));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Stack screenOptions={{ headerShown: false }} />
    </UserContext.Provider>
  );
};

export default _layout;
