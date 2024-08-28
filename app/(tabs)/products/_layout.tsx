import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Products",
          headerStyle: {},
        }}
      />
      <Stack.Screen
        name="singleProduct/[slug]"
        options={{ title: "Product Details" }}
      />
    </Stack>
  );
};

export default _layout;
