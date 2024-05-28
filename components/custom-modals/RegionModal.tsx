import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import { regionModalStyles as styles } from "./styles";
import { regionalOptions } from "../../screens/onboarding/onboarding-questions-screens/data";
import Region from "../../screens/home/components/region/Region";
import { addToCache, getItemFromCache } from "../../store/cache/cache";
import { useGlobalState } from "../../store/context";
import { SELECTED_REGION } from "../../store/cache/cacheKeys";

const RegionModal = forwardRef<CustomModalProps>((props, ref) => {
  const { globalState, setGlobalState } = useGlobalState();
  useImperativeHandle(ref, () => ({
    openModal() {
      setModalVisible(true);
    },
    closeModal() {
      setModalVisible(false);
    },
  }));

  const [modalVisible, setModalVisible] = useState(false);

  const [selected, setSelected] = React.useState<string | null>(null);

  async function handleSelected(name: string) {
    setSelected(name);
    setGlobalState({ ...globalState, region: name });
    await addToCache({ key: SELECTED_REGION, value: name });
  }

  useEffect(() => {
    async function getRegionFromCache() {
      const region = (await getItemFromCache(SELECTED_REGION)) as string;
      // console.log("(Region Modal) region from cache: ", region);
      if (region && selected !== region) {
        setSelected(region);
        setGlobalState({ ...globalState, region: region });
      }
    }
    getRegionFromCache();
  }, [globalState.region]);

  const renderOption = ({
    item,
  }: {
    item: { id: string; name: string; image: any };
  }) => {
    return (
      <Region
        selected={selected}
        handleSelected={handleSelected}
        name={item.name}
        image={item.image}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <Text style={styles.heading}>Regions</Text>
              <FlatList
                data={regionalOptions}
                renderItem={renderOption}
                keyExtractor={(item) => item.id}
                numColumns={3}
                columnWrapperStyle={{
                  // justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </View>
  );
});

export default RegionModal;
