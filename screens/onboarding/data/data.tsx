import OnboardingImage1 from "../../../assets/svgs/OnboardingImage1";
import OnboardingImage2 from "../../../assets/svgs/OnboardingImage2";
import OnboardingImage3 from "../../../assets/svgs/OnboardingImage3";
import { Text } from "react-native";
import { theme } from "../../../constants/theme";

export const data = [
    {
        id: 1,
        image: OnboardingImage1,
        title: (
          <Text>
            Your local &nbsp;stores are now closer <Text style={{ color: theme.colors.primary2 }}>to you</Text>
          </Text>
        ),
        description: "Shop neighborhood favorites, but leave the hassle to us.",
      },
      {
        id: 2,
        image: OnboardingImage2,
        title: (
          <Text>
            Support your favorite local stores today by signing up
          </Text>
        ),
        description:
          "Our Shoppers understand the essence of quality goceries.This is our promise to You",
      },
      {
        id: 3,
        image: OnboardingImage3,
        title: (
          <Text>
            Discover new ethnic stores by just a single click
          </Text>
        ),
        description:
          "Weve brought your favourite local grocery stores directly you, saving you the trip",
      },
];
