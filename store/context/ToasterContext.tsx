import { 
    useContext,
    createContext,
} from "react";

import Toast from "react-native-toast-message";
import { createNotifications } from "react-native-notificated";
import { config } from "../../components/toaster-notification/props";
import { IToasterOptions } from "../../components/toaster-notification/interfaces";

interface ToasterContextProps {
    notify: (options: IToasterOptions) => void;
}

const ToasterContext = createContext<ToasterContextProps | undefined>(undefined);

const { NotificationsProvider, useNotifications } = createNotifications(config);

export const ToasterProvider = ({ children }: any) => {

    return (
        <NotificationsProvider>
            {children}
            <Toast />
        </NotificationsProvider>
    );
};

export const useToaster = () => {
    const toaster = useNotifications();

    return toaster;
}
