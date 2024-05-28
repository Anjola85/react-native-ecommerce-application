import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { activeTabColor } from "../../constants/Colors";
import { AntDesign, Feather, Fontisto, Ionicons } from "@expo/vector-icons";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const HomeTab = (
  <Tabs.Screen
    name="home"
    options={{
      title: "Home",
      tabBarIcon: ({ color }) => (
        <Feather
          size={26}
          style={{ marginBottom: -3 }}
          name="home"
          color={color}
        />
      ),
      headerShown: false,
    }}
  />
);

const SearchTab = (
  <Tabs.Screen
    name="search"
    options={{
      title: "Search",
      tabBarIcon: ({ color }) => (
        <Feather
          name="search"
          size={24}
          color={color}
          style={{ marginBottom: -3 }}
        />
      ),
      headerShown: false,
    }}
  />
);

const SavedTab = (
  <Tabs.Screen
    name="cartPage"
    options={{
      title: "Cart",
      tabBarIcon: ({ color }) => (
        <AntDesign
          name="shoppingcart"
          size={24}
          color={color}
          style={{ marginBottom: -3 }}
        />
      ),
      headerShown: false,
    }}
  />
);

const AccountTab = (
  <Tabs.Screen
    name="account"
    options={{
      title: "Account",
      tabBarIcon: ({ color }) => (
        <Ionicons name="person-outline" size={24} color={color} />
      ),
      headerShown: false,
    }}
  />
);

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeTabColor,
        headerShown: false,
      }}
    >
      {HomeTab}
      {SearchTab}
      {SavedTab}
      {AccountTab}
    </Tabs>
  );
}
