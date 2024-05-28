import { PanResponderInstance } from "react-native";

export interface SearchScreenProps {
    onSearchClose?: () => void;
    panResponder?: PanResponderInstance;
    wantCategories?: boolean;
    wantBackBtn?: boolean;
    onOptionsClick?: () => void;
    searchResultsLink?: string;
}
