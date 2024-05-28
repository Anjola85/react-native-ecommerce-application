import { TextInput } from "react-native";

export type FormInputProps = {
    label: string;
    type: string;
    textInputOptions?: Record<string, unknown>;
    SubmitEditing?: () => void;
    Ref?: React.Ref<TextInput>;
    ValidSubmit?: boolean;
    style?: Record<string, unknown>;
    wantIcon?: boolean;
    onValidChange: (isValid: boolean) => void;
    boxStyle?: object;
    getValue?: (value: string) => void;
    getValid?: (value: boolean) => void;
};
