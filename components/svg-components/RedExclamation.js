export default () => (
  <svg
    className="red-exclamation"
    xmlns="http://www.w3.org/2000/svg"
    width="182.52"
    height="782.108"
    viewBox="0 0 182.52 782.108"
  >
    <filter id="blurMe">
      {/* <feGaussianBlur stdDeviation="5" /> */}
      <feTurbulence
        type="turbulence"
        baseFrequency="0.5"
        numOctaves="2"
        result="turbulence"
      />
      <feDisplacementMap
        in2="turbulence"
        in="SourceGraphic"
        scale="50"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
    <path
      filter="url(#blurMe)"
      d="M176-662c0-28,6.18-104.323-25.82-104.323-134.9-3.825-8.933,544.432-4.438,586.529s-1,52.892-1,52.892c-4.037,10.153,2,9,7,9,4,0,7-3,7-9l1-52.892S176-554,176-662ZM159.742-72.031c0-25-9.742,0-33.742,0s-37,22.81-37,47.81c0,26,7.825,35,31.825,35S159.742-46.031,159.742-72.031Z"
      transform="translate(6.043 782.138) rotate(-7)"
    />
  </svg>
);
