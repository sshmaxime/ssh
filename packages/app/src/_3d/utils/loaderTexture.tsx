import { TextureLoader as TxLoader } from "three";
import { useLoader } from "@react-three/fiber";

function useTexture(texturesPath: string): THREE.Texture;
function useTexture(texturesPath: string[]): THREE.Texture[];

function useTexture(texturesPath: string | string[]): THREE.Texture | THREE.Texture[] {
  const textures = useLoader(TxLoader, texturesPath);

  if (Array.isArray(textures)) {
    textures.forEach((item) => (item.flipY = false));
  } else {
    textures.flipY = false;
  }

  return textures;
}

export default useTexture;
