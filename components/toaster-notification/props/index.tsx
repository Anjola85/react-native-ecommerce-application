import AntDesign from '@expo/vector-icons/AntDesign';
import { SlideInLeftSlideOutRight } from "react-native-notificated";
import { NotificationsConfig } from "react-native-notificated/lib/typescript/types";
import { DefaultVariants } from "react-native-notificated/lib/typescript/defaultConfig/types";

export const config: Partial<NotificationsConfig<DefaultVariants>> = {
    isNotch: true,
    duration: 3000,
    notificationPosition: 'top',
    animationConfig: SlideInLeftSlideOutRight,
    defaultStylesSettings: {
        globalConfig: {},
        warningConfig: {
            leftIconSource: <AntDesign name="exclamationcircleo" size={30} color="#FFD98E" />
        },
        successConfig: {
            leftIconSource: <AntDesign name="checkcircleo" size={30} color="#22ED4E" />
        },
        errorConfig: {
            leftIconSource: <AntDesign name="warning" size={30} color="#FD7575" />
        },
        infoConfig: {
            leftIconSource: <AntDesign name="infocirlceo" size={30} color="#9BB7FF" />
        },
    }
}
