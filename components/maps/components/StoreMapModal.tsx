import { useRef, useState } from "react"
import { Platform } from "react-native";
import { StoreMapModalProps } from "../props"
import { BottomSheetRefProps } from "../../bottom-sheet/props/BottomSheetProps";
import { IPHONE_MODAL_LEVEL, ANDROID_MODAL_LEVEL } from "../functions/constants";
import CustomBottomSheet from "../../../components/bottom-sheet/BottomSheet";
import MapModalStoresPage from "./MapModalStoresPage";
import MapModalSearchPage from "./MapModalSearchPage";
import BottomSheet from "@gorhom/bottom-sheet";
import StarFiltering from "./StarFiltering";

const StoreMapModal = ({ stores, loading, userCoordinates }: StoreMapModalProps) => {
    const [modalLevel, setModalLevel] = useState<string>(Platform.OS === 'ios' ? IPHONE_MODAL_LEVEL : ANDROID_MODAL_LEVEL);
    const [activeModal, setActiveModal] = useState<"stores" | "search">("stores");
    const filteringBottomRef = useRef<BottomSheetRefProps>(null);
    const [ratingFilter, setRatingFilter] = useState<number>(-1);


    const openStoreModal = () => {
        setActiveModal("stores");
        setModalLevel(Platform.OS === 'ios' ? IPHONE_MODAL_LEVEL : ANDROID_MODAL_LEVEL);
    }

    const openSearchModal = () => {
        setActiveModal("search");
        setModalLevel("85%");
    }

    const openFilterModal = () => {
        filteringBottomRef?.current?.scrollTo(-410);
    }

    const closeFilterModal = (rating: number) => {
        filteringBottomRef?.current?.scrollTo(100);
        setRatingFilter(rating)
    }

    const renderModal = () => {
        switch (activeModal) {
            case "stores":
                return (
                    <MapModalStoresPage 
                        stores={stores} 
                        loading={loading} 
                        userCoordinates={userCoordinates} 
                        onSearchIconPress={openSearchModal} 
                        ratingFilter={ratingFilter} 
                        onRatingsIconPress={openFilterModal}
                    />
                )
            case "search":
                return <MapModalSearchPage onBackButtonPress={openStoreModal}/>
        }
    }

    return (
        <>
            <BottomSheet snapPoints={[modalLevel]} index={0} animateOnMount={true}>
                {renderModal()}
            </BottomSheet>
            <CustomBottomSheet ref={filteringBottomRef}>
                <StarFiltering onClose={closeFilterModal} />
            </CustomBottomSheet>
        </>
    )
}

export default StoreMapModal
