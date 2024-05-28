export type BottomSheetProps = {
    children?: React.ReactNode;
}
export type BottomSheetRefProps = {
    scrollTo: (destination: number) => void;
    isActive: () => boolean;
}
