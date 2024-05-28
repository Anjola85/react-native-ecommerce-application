import { memo } from "react";
import MapStoreList from "./MapStoreList";

const MemoizedMapStoreList = memo(MapStoreList, (prevProps, nextProps) => {
    return (
        prevProps.scrollIndex === nextProps.scrollIndex 
        &&
        prevProps.stores === nextProps.stores 
    );
});

export default MemoizedMapStoreList;
