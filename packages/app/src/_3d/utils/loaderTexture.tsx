import { TextureLoader as TxLoader } from "three";
import { useLoader } from "@react-three/fiber";

const useTexture = (texturesPath: string[]): THREE.Texture[] => {
  const textures: THREE.Texture[] = useLoader(TxLoader, texturesPath);
  textures.forEach((item) => (item.flipY = false));

  return textures;
};

export default useTexture;
