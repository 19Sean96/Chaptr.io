import { useState } from "react";
export default (props) => {
  const [hovered, setHover] = useState(false);
  return (
    <svg
      className={`red-blob red-blob-${props.num}`}
      xmlns="http://www.w3.org/2000/svg"
      width="1135.607"
      height="827.711"
      viewBox="0 0 1135.607 827.711"
    >
      <path
        id="RedBlob2"
        class="cls-1"
        d="M646.814,4.44C892.581,4.44,890,199.233,890,445S609.6,957.159,379.555,767.834-367.37,953.657-219.411,467.9,401.048,4.44,646.814,4.44Z"
        transform="translate(245.605 -4.282)"
      />
    </svg>
  );
};
