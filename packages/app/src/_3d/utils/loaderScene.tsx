import { Canvas, Vector3 } from "@react-three/fiber";
import { FC, Suspense } from "react";
import { ThemeProvider } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const LoaderScene: FC = ({ children }) => {
  const theme = useTheme();

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Suspense fallback={null}>
        <Canvas flat={true} linear={true} style={{ height: "100%", width: "100%" }}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Canvas>
      </Suspense>
    </div>
  );
};

export default LoaderScene;
