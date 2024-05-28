import { useToaster } from "../../../store/context/ToasterContext";

import { 
    IToaster,
    IToasterOptions,
} from "../interfaces";

const { notify } = useToaster();

export class AndroidToaster implements IToaster {
    notify(options: IToasterOptions): void {
        notify(options.type, {
            params: {
                title: options.title,
                description: options.message,
            },
            config: {
                duration: options.duration ? options.duration * 1000 : 3000,
                notificationPosition: options.position,
            }
        })
    }
}
