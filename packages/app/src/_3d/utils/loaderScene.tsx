import { Canvas } from "@react-three/fiber";
import { FC, Suspense } from "react";
import { ThemeProvider } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const LoaderScene: FC = ({ children }) => {
  const theme = useTheme();

  return (
    <div style={{ height: "100%", width: "100%", position: "relative" }}>
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 0] }}
          flat={true}
          linear={true}
          style={{ height: "100%", width: "100%", position: "relative" }}
        >
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Canvas>
      </Suspense>
    </div>
  );
};

export default LoaderScene;
