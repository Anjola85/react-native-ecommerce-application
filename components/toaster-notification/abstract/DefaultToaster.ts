import * as Burnt from 'burnt';

import { ToastOptions, BaseToastOptions } from 'burnt/build/types';

import { 
    IToaster,
    IToasterOptions,
} from '../interfaces';

export class DefaultToaster implements IToaster {
    notify(options: IToasterOptions): void {
        Burnt.toast({
            title: options.title,
            message: options.message,
            preset: mapToasterType(options.type),
            from: options.position,
            duration: options.duration,
            layout: options.style as ToastOptions['layout']
        })
    }
}

function mapToasterType(type: IToasterOptions['type']): BaseToastOptions['preset'] {
    switch (type) {
        case 'success':
            return 'done';
        case 'error':
            return 'error';
        case 'warning':
            return 'none';
        case 'info':
            return 'none';
        default:
            return 'none';
    }
}
