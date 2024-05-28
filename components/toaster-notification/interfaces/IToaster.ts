export interface ToastStyle {
    iconSize?: { width: number, height: number };
}

/**
 * @interface IToasterOptions
 * @description Interface for toaster options
 * @property {string} title - Title of the toaster
 */
export interface IToasterOptions {
    /**
     * Title of the toaster
     * @type {string}
     * @memberof IToasterOptions
     * @required
     */
    title: string;

    /**
     * Message of the toaster
     * @type {string}
     * @memberof IToasterOptions
     * @optional
     */ 
    message?: string;

    /**
     * Type of the toaster
     * @type {'success' | 'error' | 'warning' | 'info'}
     * @memberof IToasterOptions
     * @required
     * @default 'info'
     */ 
    type: 'success' | 'error' | 'warning' | 'info';

    /**
     * Duration of the toaster in seconds
     * @type {number}
     * @memberof IToasterOptions
     * @optional
     * @default 3
     * @unit seconds
     * @minimum 1
     */
    duration?: number;

    /**
     * Position of the toaster
     * @type {'top' | 'bottom'}
     * @memberof IToasterOptions
     * @optional
     * @default 'top'
     */ 
    position?: 'top' | 'bottom';

    /**
     * Style of the toaster
     * @type {ToastStyle}
     * @memberof IToasterOptions
     * @optional
     * @default {}
     */ 
    style?: ToastStyle;
}

/**
 * @interface IToaster
 * @description Interface for toaster
 * @method notify - Method to notify the toaster
 * @param {IToasterOptions} options - Options for the toaster
 * @returns {void}
 */ 
export interface IToaster {
    notify(options: IToasterOptions): void;
}
