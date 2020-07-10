import styled from "styled-components";
import { useMorph } from "react-morph";
import { useState } from "react";

const StyledSVG = styled.svg`
.cls-1 {
    fill: #fff;
  }

  .cls-1,
  .cls-3 {
    stroke: #707070;
  }

  .cls-2 {
    clip-path: url(#clip-path);
  }

  .cls-3 {
    fill: url(#pattern);
  }

  .cls-4 {
    stroke: none;
  }

  .cls-5 {
    fill: none;
  }
`;

export default (props) => {
  const [hovered, setHover] = useState(false);
  const morph = useMorph();
  return (
    <StyledSVG className="img--dustheads">
<svg
  xmlns="http://www.w3.org/2000/svg"
  xlink="http://www.w3.org/1999/xlink"
  width="916.476"
  height="550.393"
  viewBox="0 0 916.476 550.393"
>
  <defs>

    <clipPath id="clip-path">
      <path
        id="Path_5"
        data-name="Path 5"
        class="cls-1"
        d="M407.149,146.758c169.844,76.055,530.7-16.16,515.069,250.887S694.027,684.921,438.7,684.921,253,711.762,60.433,582.113,237.306,70.7,407.149,146.758Z"
        transform="translate(75 1219)"
      />
    </clipPath>
    <pattern
      id="pattern"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080"
    >
      <image width="1920" height="1080" xlink:href="dustheads-blob-image.png" />
    </pattern>
  </defs>
  <g id="dustheads-blob" class="cls-2" transform="translate(-81.235 -1355.83)">
    <g
      id="Image_1"
      data-name="Image 1"
      class="cls-3"
      transform="translate(18.845 1349.227)"
    >
      <rect class="cls-4" width="1001.305" height="563.234" />
      <rect class="cls-5" x="0.5" y="0.5" width="1000.305" height="562.234" />
    </g>
  </g>
</svg>
    </StyledSVG>
  );
};
