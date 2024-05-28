import { BusinessResponse } from "../../../../api/api-contracts/user/responses/business.response";

export interface SearchSuggestionBannerGroupProps {
    searchResult: BusinessResponse[];
    isLoading: boolean;
    onSearchItemPress?: () => void;
}
