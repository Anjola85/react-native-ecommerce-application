import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

const GoogleIconSvg: React.FC<SvgProps> = ({
  width = 16,
  height = 16,
  ...props
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    preserveAspectRatio="XMidYMid meet"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#4285F4"
        d="M14.994 7.64c0-.614-.051-1.063-.162-1.528H7.65v2.774h4.216c-.085.69-.544 1.727-1.564 2.425l-.014.093 2.27 1.719.158.015c1.445-1.304 2.278-3.222 2.278-5.498Z"
      />
      <Path
        fill="#34A853"
        d="M7.65 14.948c2.065 0 3.8-.664 5.066-1.81l-2.414-1.827c-.646.44-1.513.747-2.652.747a4.595 4.595 0 0 1-4.352-3.106l-.09.008-2.36 1.785-.032.084c1.258 2.442 3.842 4.12 6.834 4.12Z"
      />
      <Path
        fill="#FBBC05"
        d="M3.298 8.953a4.506 4.506 0 0 1-.255-1.479c0-.515.093-1.013.246-1.478l-.004-.099-2.39-1.814-.08.036A7.342 7.342 0 0 0 0 7.474c0 1.204.297 2.342.816 3.355l2.482-1.877Z"
      />
      <Path
        fill="#EB4335"
        d="M7.65 2.89c1.436 0 2.405.606 2.958 1.113l2.159-2.06C11.44.74 9.715 0 7.65 0 4.658 0 2.074 1.678.816 4.12L3.29 5.995A4.614 4.614 0 0 1 7.65 2.89Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h15v15H0z" />
      </ClipPath>
    </Defs> 
  </Svg>
  );
export default GoogleIconSvg;
