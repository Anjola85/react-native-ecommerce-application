import { BusinessResponse } from "../../../../api/api-contracts/user/responses/business.response";

export interface SearchSuggestionBannerProps {
    store: BusinessResponse;
    onPress?: () => void;
}
