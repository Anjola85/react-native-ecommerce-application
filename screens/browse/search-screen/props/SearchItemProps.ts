import { BusinessDto } from "../data/data-types";

export interface SearchItemProps {
    store: BusinessDto;
    onPress?: () => void;
}
