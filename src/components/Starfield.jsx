import { useEffect, useState } from "react";

const randRange = (min, max) => Math.random() * (max - min) + min;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const Starfield = ({ stars, maxSize = 1.5, ...props }) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { height, width } = windowDimensions;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", zIndex: -1 }}
      preserveAspectRatio="none"
    >
      {[...Array(stars)].map(() => (
        <circle
          fill="#fff"
          cx={randRange(0, width)}
          cy={randRange(0, height)}
          r={randRange(0.05, maxSize)}
          style={{
            animation: `stars ${randRange(2, 10)}s ease-in-out infinite`,
          }}
        />
      ))}
    </svg>
  );
};

export default Starfield;
