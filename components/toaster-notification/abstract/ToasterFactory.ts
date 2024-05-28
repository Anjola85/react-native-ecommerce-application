import { Platform } from "react-native";
import { IOSToaster } from "./IOSToaster";
import { AndroidToaster } from "./AndroidToaster";
import { DefaultToaster } from "./DefaultToaster";

export class ToasterFactory {
    static createToaster() {
        if (Platform.OS === 'ios') {
            return new IOSToaster();
        } else if (Platform.OS === 'android') {
            return new AndroidToaster();
        } else {
            throw new Error('Toaster failed to be created: Unsupported platform');
        }
    }
}
