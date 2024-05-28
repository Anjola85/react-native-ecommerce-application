import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const ArrowBackSvg: React.FC<SvgProps> = ({
  width = 30,
  height = 30,
  ...props
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 30 30"
    preserveAspectRatio="XMidYMid meet"
    {...props}
  >
    <Path
      fill="#000"
      d="m13.594 24.125-8.25-8.25a1.104 1.104 0 0 1-.266-.406A1.353 1.353 0 0 1 5 15c0-.167.026-.323.079-.469a1.11 1.11 0 0 1 .265-.406l8.25-8.25c.229-.23.516-.349.86-.359.344-.01.64.11.89.359.25.23.38.516.391.86.01.344-.11.64-.36.89L9.25 13.75h13.969c.354 0 .651.12.891.36s.36.537.359.89c0 .354-.12.651-.359.891-.24.24-.536.36-.891.359H9.25l6.125 6.125c.23.23.35.52.36.875.01.354-.11.646-.36.875-.23.25-.52.375-.875.375-.354 0-.656-.125-.906-.375Z"
    />
  </Svg>
);

export default ArrowBackSvg;
