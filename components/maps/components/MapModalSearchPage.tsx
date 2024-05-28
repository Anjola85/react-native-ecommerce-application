import SearchScreen from "../../../screens/browse/search-screen/SearchScreen"
import { MapModalSearchPageProps } from "../props";

const MapModalSearchPage = ({ onBackButtonPress }:MapModalSearchPageProps) => {
    return (
        <SearchScreen 
          wantCategories={false}
          onSearchClose={onBackButtonPress}
          wantBackBtn
          searchResultsLink="/home/searchresults"
        />
    )
}

export default MapModalSearchPage;
