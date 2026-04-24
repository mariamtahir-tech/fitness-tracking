import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        // Screen background color (main content)
        sceneStyle: {
          backgroundColor: "#9bbdba",
        },

        // Bottom navigation bar style
        tabBarStyle: {
          backgroundColor: "#1d5c74",
          borderTopColor: "transparent",
        },

        //  Tab icon/text colors
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#9bbdba",
      }}
    />
  );
}