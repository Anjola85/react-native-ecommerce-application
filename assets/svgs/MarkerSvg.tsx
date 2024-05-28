import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, Ellipse, NumberProp } from "react-native-svg";
import { theme } from "../../constants/theme";

// 85,95 -> 0 0 80 115
const MarkerSvg: React.FC<SvgProps> = ({
  width = 85,
  height = 95,
  ...props
}) => {
    const vWidth: NumberProp = (width as number) - 5;
    const vHeight: NumberProp = (height as number) + 15;
    return (
  <Svg
    width={width}
    height={height}
    viewBox={`0 0 ${vWidth} ${vHeight}`}
    preserveAspectRatio="XMidYMid meet"
    {...props}
  >
    <G filter="url(#a)">
      <Ellipse cx={42} cy={99} fill="#000" fillOpacity={0.2} rx={11} ry={4} />
    </G>
    <Path
      fill={theme.colors.primary}
      fillRule="evenodd"
      d="M42 0c23.196 0 42 18.804 42 42 0 17.785-11.055 32.988-26.667 39.113l-12.94 17.688c-.27.37-.629.673-1.045.881a3.01 3.01 0 0 1-2.696 0 2.895 2.895 0 0 1-1.044-.88l-12.94-17.689C11.054 74.988 0 59.785 0 42 0 18.804 18.804 0 42 0Zm0 8c18.778 0 34 15.222 34 34S60.778 76 42 76 8 60.778 8 42 23.222 8 42 8Z"
      clipRule="evenodd"
    />
    <Defs></Defs>
  </Svg>
  )};
export default MarkerSvg;
