export interface SearchBarProps {
    onSearch?: (query: string) => void;
    onClick?: () => void;
    wantBackBtn?: boolean;
    wantOptions?: boolean;
    onSearchClose?: () => void;
    onOptionsClick?: () => void;
    onSubmit?: () => void;
}
