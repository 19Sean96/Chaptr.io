import { useState } from "react";
export default (props) => {
  const [hovered, setHover] = useState(false);
  return (
    <svg
      className={`red-blob red-blob-${props.num}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 415.079 417.426"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      id={props.id}
    >
      <path
        d="M100.5,0C240.117-49.747,328.56-.379,289.275,80.71S127.643,244.654,74.787,223.562,86.131,100.753,0,100.5-39.117,49.747,100.5,0Z"
        transform={!hovered ?
          "matrix(-0.695, 0.719, -0.719, -0.695, 370.663, 188.741)"
          : "matrix(-1.195, 0.419, -1.719, -0.295, 670.663, 238.741)"
        }
      />
    </svg>
  );
};
