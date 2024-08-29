import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../_layout";
import AsyncStorage from "@react-native-async-storage/async-storage";

const profile = () => {
  const [username, setUsername] = useState("michael_johnson");
  const [password, setPassword] = useState("Michael123!");
  const { user, setUser } = useContext(UserContext);

  const handleLogin = () => {
    fetch("https://fakeauthentication-api.onrender.com/api/staticUsers/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        handleUserSave(result);
      });
  };

  const handleUserLogout = async () => {
    await AsyncStorage.removeItem("user");
    setUser(null);
  };

  const handleUserSave = async (result) => {
    await AsyncStorage.setItem("user", JSON.stringify(result.user));
    setUser(result.user);
  };

  return (
    <View style={styles.contain}>
      {user ? (
        <>
          <Text style={styles.userInfo}>username: {user.username}</Text>
          <Text style={styles.userInfo}>email: {user.email}</Text>
          <Text style={styles.userInfo}>name: {user.name}</Text>
          <Button title="Log Out" onPress={handleUserLogout} />
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="username"
            onChangeText={setUsername} //მხოლოდ ინფუთის onChangeText-ის ივენთზე მუშაობს
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="password"
            onChangeText={(text) => setPassword(text)} //ეს არის სრული ვარიანტი
          />
          <Button title="Log In" onPress={handleLogin} />
        </>
      )}
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  contain: {
    padding: 16,
  },
  input: {
    height: 58,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 16,
    marginBottom: 20,
    padding: 10,
  },
  userInfo: {
    fontSize: 24,
    marginBottom: 16,
  },
});
