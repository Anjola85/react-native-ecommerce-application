import React,{ useCallback, useRef, useEffect } from "react";
import { ViewToken } from "react-native";
import MapStoreCard from "./MapStoreCard";
import { FlatList } from "react-native-gesture-handler";
import { BusinessRespDto } from "../../../api/api-contracts/user/responses/business.response";
import { MapStoreListProps } from "../props";


export const keyExtractor = (item: BusinessRespDto, index: number) => new String(item.id).toString();

const MapStoreList = ({ stores, onStoreCardFocus, scrollIndex, userCoordinates }: MapStoreListProps) => {
    type StoreListProp = {
        item: BusinessRespDto;
    };
    const renderItem = useCallback(({item}: StoreListProp ) => {
        return <MapStoreCard store={item} user={userCoordinates} onPress={() => onStoreCardFocus && onStoreCardFocus(item.id)}/>;
    }, []);

    const renderStoreCards = () => {
        return stores.map((store) => <MapStoreCard key={store.id} store={store} user={userCoordinates}/>);
    };

  const flatListRef = useRef<FlatList<BusinessRespDto> | null>(null);

  const onViewableItemsChange = (info: {
    viewableItems: Array<ViewToken>;
    changed: Array<ViewToken>;
  }) => {
    // Check if the viewableItems array is not empty
    if (info.viewableItems.length > 0) {
      const firstVisibleItem = info.viewableItems[0];
      const visibleIndex = stores.findIndex(
        (store) => store.id === firstVisibleItem.item.id
      );
      // Call the function to make the store at the specified index visible
      makeStoreVisible(visibleIndex);
    }
  };

  const makeStoreVisible = (index: number) => {
    if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
            index,
            animated: true,
            viewPosition: 0,
        });
    }
  };

    const [index, setIndex] = React.useState(scrollIndex);
    useEffect(() => {
        makeStoreVisible(index);
        setIndex(scrollIndex);
    }, [scrollIndex]);

    const getItemLayout = (data: BusinessRespDto[] | any, index: number) => (
        {length: 250, offset: 265 * index, index}
    )
    return (
        <FlatList
            ref={flatListRef}
            data={stores}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            viewabilityConfig={{
                itemVisiblePercentThreshold: 75,
            }}
            getItemLayout={getItemLayout}
        />
    );
};

export default MapStoreList;
