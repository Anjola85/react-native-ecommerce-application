import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";

const iconsSize = 24;
const iconsColor = "#292D32";

export const generalLinks = [
  {
    name: "Account Settings",
    icon: (
      <Ionicons name="person-outline" size={iconsSize} color={iconsColor} />
    ),
    hasNextPage: true,
    linkString: "account/settings",
  },
  {
    name: "Your Favourites",
    icon: <Ionicons name="heart-outline" size={iconsSize} color={iconsColor} />,
    hasNextPage: true,
    linkString: "account/saved",
  },
  {
    name: "Addresses",
    icon: (
      <Ionicons name="location-outline" size={iconsSize} color={iconsColor} />
    ),
    hasNextPage: true,
    linkString: "account/addresses",
  },
  {
    name: "Suggest a Store",
    icon: <Ionicons name="help" size={iconsSize} color={iconsColor} />,
    hasNextPage: true,
    linkString: "account/suggestastore",
  },
];

export const socialLinks = [
  {
    name: "Find us on Facebook",
    icon: <Ionicons name="logo-facebook" size={iconsSize} color={iconsColor} />,
    hasNextPage: false,
    linkString: "https://www.facebook.com/profile.php?id=61553799246748",
  },
  {
    name: "Find us on Instagram",
    icon: (
      <Ionicons name="logo-instagram" size={iconsSize} color={iconsColor} />
    ),
    hasNextPage: false,
    linkString:
      "http://url8131.quiikmart.com/ls/click?upn=kv5u-2Bd0O0NAZiisRUDOuohT3RWvMQlkd7lMEwYcP7BT-2FAw-2BX4-2F6tawlA5o95lXAEbSh5_Iqtv1pZ7syYWUFCm1Og0B-2FdDnahpeJPQctuep5Wy-2F1mwBiGdZ8NLQFkKZnLnN7l69VhftuhIL5X1oa9hAwFVzJp472skCv5L9l9lStGGkIuABQdmFsRxQyUXwXaFFwJBx0tPQCUzz8dwlbmA9umJVWVFYDufAyyZaSYxtLIFYVjMIpu9A1d0CApVVBkfLfwcEGpnw7phADjX-2FBQ2u5NFkuV8-2FaneZXGrN3oWHpofGek-3D",
  },
  {
    name: "Find us on Twitter",
    icon: <Ionicons name="logo-twitter" size={iconsSize} color={iconsColor} />,
    hasNextPage: false,
    linkString:
      "http://url8131.quiikmart.com/ls/click?upn=kv5u-2Bd0O0NAZiisRUDOuorymkcRW4i7V0egnzVDCp53ipf1w8tOy5arP1XXkFPZ-2Ba21V_Iqtv1pZ7syYWUFCm1Og0B-2FdDnahpeJPQctuep5Wy-2F1mwBiGdZ8NLQFkKZnLnN7l69VhftuhIL5X1oa9hAwFVzDO7v-2F6IVPOOZXD5sYTjU1BMc9PEE2R0A0uikm1sPnzd33i7L0970b8nOCE3sQU6nvUYC-2FRC-2BSpafwptchqAnvFOeQhSRNa2ERb8np-2BRmgk4bhoSAFORs-2Fpp0-2By-2FrqsovvAjUmaWuk2cU5u0JUAaljE-3D",
  },
  {
    name: "Find us on Tiktok",
    icon: <Ionicons name="logo-youtube" size={iconsSize} color={iconsColor} />,
    hasNextPage: false,
    linkString: "https://www.tiktok.com/@quiikmart?_t=8iU01qGRI3S&_r=1",
  },
];

export const miscellanousLinks = [
  {
    name: "Give feedback",
    icon: (
      <Ionicons name="chatbox-outline" size={iconsSize} color={iconsColor} />
    ),
    hasNextPage: true,
    linkString: "account/feedback",
  },
  {
    name: "How Quiikmart works",
    icon: <Ionicons name="help" size={iconsSize} color={iconsColor} />,
    hasNextPage: true,
    linkString: "account/works",
  },
  {
    name: "Help center",
    icon: (
      <Ionicons
        name="help-circle-outline"
        size={iconsSize}
        color={iconsColor}
      />
    ),
    hasNextPage: true,
    linkString: "account/helpcenter",
  },
  {
    name: "Notifications",
    icon: (
      <Ionicons
        name="notifications-outline"
        size={iconsSize}
        color={iconsColor}
      />
    ),
    hasNextPage: true,
    linkString: "account/notifications",
  },
];

export const accountSettingsLinks = [
  {
    name: "Profile",
    icon: (
      <Ionicons name="person-outline" size={iconsSize} color={iconsColor} />
    ),
    hasNextPage: true,
    linkString: "account/settings/profile",
  },
  // {
  //   name: "Privacy",
  //   icon: (
  //     <Ionicons
  //       name="lock-closed-outline"
  //       size={iconsSize}
  //       color={iconsColor}
  //     />
  //   ),
  //   hasNextPage: true,
  //   linkString: "",
  // },
  // {
  //   name: "Payment Methods",
  //   icon: <MaterialIcons name="payment" size={iconsSize} color={iconsColor} />,
  //   hasNextPage: true,
  //   linkString: "account/settings/payment",
  // },
  // {
  //   name: "Accessibility",

  //   icon: (
  //     <MaterialIcons
  //       name="accessible-forward"
  //       size={iconsSize}
  //       color={iconsColor}
  //     />
  //   ),
  //   hasNextPage: true,
  //   linkString: "account/settings/accessibility",
  // },
  // {
  //   name: "English",
  //   icon: (
  //     <FontAwesome5
  //       name="canadian-maple-leaf"
  //       size={iconsSize}
  //       color={"#EC1C24"}
  //     />
  //   ),
  //   hasNextPage: true,
  //   linkString: "account/settings/language",
  // },
  {
    name: "Delete Account",
    icon: (
      <FontAwesome5 name="user-times" size={iconsSize} color={iconsColor} />
    ),
    hasNextPage: true,
    linkString: "account/settings/deleteAccount",
  },
  {
    name: "Privacy Policy",
    icon: (
      <MaterialIcons name="verified-user" size={iconsSize} color={iconsColor} />
    ),
    hasNextPage: true,
    linkString: "account/settings/privacy",
  },
];
