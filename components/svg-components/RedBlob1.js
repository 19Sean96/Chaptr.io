export default (props) => {
  return (
    <svg
      className={`red-blob red-blob-${props.num}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 415.079 417.426"
      id={props.id}
    >
      <filter id="blurMe">
        <feGaussianBlur stdDeviation="2" />
      </filter>
      <path
        filter="url(#blurMe)"
        d="
        M100.5,
        0C240.117-49.747,
        328.56-.379, 
        289.275,
        80.71S127.643,
        244.654,
        74.787,
        223.562,
        86.131,
        100.753,
        0,
        100.5-39.117,
        49.747,
        100.5,
        0Z"
      />
    </svg>
  );
};
