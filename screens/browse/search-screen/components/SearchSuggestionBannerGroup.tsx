import { SearchSuggestionBannerGroupProps } from "../props/SearchSuggestionBannerGroupProps";
import SearchItemSkeleton from "../../../../components/loading/skeletons/items/SearchItemSkeleton";
import SearchSuggestionBanner from "./SearchSuggestionBanner";

const SuggestionsLoading = () => (
    <>
      <SearchItemSkeleton />
      <SearchItemSkeleton />
      <SearchItemSkeleton />
    </>
);

const SearchSuggestionBannerGroup = ({
    searchResult,
    isLoading,
    onSearchItemPress,
}: SearchSuggestionBannerGroupProps) => {
    if (isLoading) {
        return <SuggestionsLoading />;
      }
    
      return (
        <>
          {searchResult.map((store, index) => (
            <SearchSuggestionBanner store={store} key={index} onPress={onSearchItemPress} />
          ))}
        </>
      );
};

export default SearchSuggestionBannerGroup;
