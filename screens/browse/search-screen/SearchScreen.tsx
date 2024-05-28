import React, { useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useRouter } from "expo-router";
import { theme } from "../../../constants/theme";
import { STORES } from "../../../store/cache/cacheKeys";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchScreenProps } from "./props/SearchScreenProps";
import { getItemFromCache } from "../../../store/cache/cache";
import { dummyBusinesses } from "../../../store/api/business/business_dummy_data";
import { BusinessRespDto } from "../../../api/api-contracts/user/responses/business.response";
import SearchItemSkeleton from "../../../components/loading/skeletons/items/SearchItemSkeleton";
import SearchSuggestionBannerGroup from "./components/SearchSuggestionBannerGroup";
import StoreSearchBar from "./components/StoreSearchBar";
import SearchByRegion from "./components/SearchByRegion";
import styles from "./styles/SearchScreenStyles";

type status = "loading" | "searching" | "failed" | "show-categories" | "completed";

const SEARCH_RESULT_LIMIT = 5;

const SearchScreen: React.FC<SearchScreenProps> = ({
  onSearchClose,
  wantBackBtn,
  wantCategories = true,
  searchResultsLink,
}: SearchScreenProps) => {
  const [stores, setStores] = React.useState<BusinessRespDto[]>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [searchTimeout, updateTimeoutID] = React.useState<NodeJS.Timeout>();
  const [searchResultPreview, setSearchResultPreview] = React.useState<BusinessRespDto[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [activeState, setActiveState] = React.useState<status>("loading");

  const router = useRouter();

  useEffect(() => {
    if (wantCategories) {
      setActiveState("show-categories");
    } 
  }, [wantCategories]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const stores: BusinessRespDto[] = await getItemFromCache(STORES) as BusinessRespDto[];
        if (stores) {
          setStores(stores);
        } else {
          setStores(dummyBusinesses);
        }
        if (wantCategories) {
          setActiveState("show-categories");
        } else {
          setActiveState("completed");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setActiveState("failed");
      }
    };

    fetchStores();
  }, []);

  const handleActiveSearch = (query: string) => {
    setSearchQuery(query);
    setActiveState("searching");

    // Clear any previous timers
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    // search bar empty
    if (query === "") {
      setActiveState((_) => (wantCategories ? "show-categories" : "completed"));
      return setSearchResultPreview([]);
    }
    setIsLoading(true);

    // Create a timer to wait for 3 seconds after typing stops
    const makeNewSearch = setTimeout(async () => {
      try {
        const filteredStores = stores.filter((store) =>
          store.name.toLowerCase().includes(query.toLowerCase())
        );

        // if filtered stores is less than limit, make a call to server to get more stores

        // limit result to search limit
        setSearchResultPreview(filteredStores.slice(0, SEARCH_RESULT_LIMIT));

        // search unsuccessful
        if (filteredStores.length === 0) {
          setActiveState("failed");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setActiveState("failed");
      } finally {
        setIsLoading(false);
        // setSearching(false)
      }
    }, 500);

    updateTimeoutID(makeNewSearch);
  };

  const clearSearch = () => {
    setSearchResultPreview([]);
  };

  const handleFinalSearch = () => {
    if (searchResultPreview.length === 0) {
      setActiveState("failed");
    }

    const item = {
      type: "search",
      title: "search results",
      searchQuery: searchQuery,
    };
    let link = searchResultsLink || "/browse/searchresults";
    link = link.startsWith("/") ? link.slice(1) : link; // remove leading slash
    router.push({ pathname: `/${link}`, params: item });
  };

  const renderOtherPageContent = () => {
    switch (activeState) {
      case "loading":
        return <SearchItemSkeleton />;
      case "show-categories":
        return <SearchByRegion />;
      case "failed":
        return <></>;
      case "completed":
        return <></>;
      case "searching":
        return <>
          <SearchSuggestionBannerGroup
            searchResult={searchResultPreview}
            isLoading={isLoading}
            onSearchItemPress={clearSearch}
          />
          <View style={{ height: 10, width: "100%" }} />
        </>;
      default:
        return <Text>Completed</Text>;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <StoreSearchBar
            onSearchClose={onSearchClose}
            onSearch={handleActiveSearch}
            onSubmit={handleFinalSearch}
            wantBackBtn={wantBackBtn}
          />
          {renderOtherPageContent()}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const { height, width } = Dimensions.get("window");

export default SearchScreen;
