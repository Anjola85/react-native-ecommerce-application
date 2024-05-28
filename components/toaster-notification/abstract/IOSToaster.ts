import Toast, { ToastType } from "react-native-toast-message";

import { IToaster, IToasterOptions } from "../interfaces";

export class IOSToaster implements IToaster {
  notify(options: IToasterOptions): void {
    Toast.show({
      text1: options.title,
      text2: options.message,
      type: mapToasterType(options.type),
      position: options.position,
      visibilityTime: options.duration ? options.duration * 1000 : 3000,
      topOffset: 50,
    });
  }
}

function mapToasterType(type: IToasterOptions["type"]): ToastType | undefined {
  switch (type) {
    case "success":
      return "success";
    case "error":
      return "error";
    case "info":
      return "info";
    case "warning":
      return undefined;
    default:
      return undefined;
  }
}
