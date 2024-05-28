import { SvgProps } from "react-native-svg";

export interface SliderItemProps {
    item: {
      id: number;
      image: React.FC<SvgProps>;
      title: React.ReactNode;
      description: string;
    };
}
