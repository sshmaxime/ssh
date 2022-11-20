import { Html, useProgress } from "@react-three/drei";

export function Loader() {
  const { progress } = useProgress();
  return (
    <Html center style={{ marginTop: "50vh", marginLeft: "50vw", height: "100px", width: "100px" }}>
      {progress} % loaded
    </Html>
  );
}

//
