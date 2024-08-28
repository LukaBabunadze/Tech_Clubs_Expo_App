import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1878de",
        tabBarInactiveTintColor: "#4f4f4f",
        tabBarStyle: {},
        tabBarLabelStyle: {},
        headerStyle: {},
      }}
    >
      <Tabs.Screen
        name="products"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => (
            <Feather
              name="shopping-bag"
              size={focused ? 26 : 24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <Feather name="user" size={focused ? 26 : 24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
