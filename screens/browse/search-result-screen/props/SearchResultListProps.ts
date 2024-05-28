export interface SearchResultListProps {
    stores: any[];
    onPageReload?: () => void;
    userLocation?: {latitude: number, longitude: number};
}
