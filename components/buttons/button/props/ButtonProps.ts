export interface ButtonProps {
    children: React.ReactNode;
    onPress: () => void;
    text_style?: Record<string, unknown>;
    button_style?: Record<string, unknown>;
    disabled?: boolean;
}

export interface LoadingButtonProps extends ButtonProps {
    isLoading: boolean;
    loadingIconSize?: number;
}
