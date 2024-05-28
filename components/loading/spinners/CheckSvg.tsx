import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

const SvgComponent: React.FC<SvgProps> = ({
  width = 28,
  height = 28,
  ...props
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 28 28"
    preserveAspectRatio="XMidYMid meet"
    {...props}
  >
        <G fill="#fff" clipPath="url(#a)">
      <Path d="M14 1.556a12.445 12.445 0 1 0 0 24.889 12.445 12.445 0 0 0 0-24.89Zm0 23.333a10.889 10.889 0 1 1-.001-21.777 10.889 10.889 0 0 1 0 21.777Z" />
      <Path d="M21.778 9.411a.778.778 0 0 0-1.097 0l-8.633 8.595-4.667-4.667a.79.79 0 1 0-1.159 1.073l5.826 5.81 9.73-9.706a.779.779 0 0 0 0-1.105Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h28v28H0z" />
      </ClipPath>
    </Defs>
  </Svg>
  );
export default SvgComponent;
