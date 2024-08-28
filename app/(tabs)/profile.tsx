import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";

const profile = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        setUser(result.user);
      });
  };

  return (
    <View style={styles.contain}>
      {user ? (
        <>
          <Text style={styles.userInfo}>username: {user.username}</Text>
          <Text style={styles.userInfo}>email: {user.email}</Text>
          <Text style={styles.userInfo}>name: {user.name}</Text>
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
