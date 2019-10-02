import { useSpring } from "react-spring";

export default ({ x, y, z, delay }) => {
  const styles = useSpring({
    from: {
      opacity: 0,
      transform: `translate3d(${x || "0"},${y || "-300px"},${z || "0"})`
    },
    to: { opacity: 1, transform: "translate3d(0,0,0)" },
    delay,
    native: true
  });

  return styles;
};
