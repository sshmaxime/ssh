import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

function useTexture(texturesPath: string): THREE.Texture;
function useTexture(texturesPath: string[]): THREE.Texture[];

function useTexture(texturesPath: string | string[]): THREE.Texture | THREE.Texture[] {
  const textures = useLoader(TextureLoader, texturesPath);

  if (Array.isArray(textures)) {
    textures.forEach((item) => (item.flipY = false));
  } else {
    textures.flipY = false;
  }

  return textures;
}

const textureLoader = new TextureLoader();
const textureLoaderCache: { [key: string]: THREE.Texture } = {};
export const loadTextureToObject = (texturePath: string, ref: any) => {
  const cachedTexture = textureLoaderCache[texturePath];
  if (cachedTexture) {
    ref.current.material.map = cachedTexture;
    ref.current.material.needsUpdate = true;
    return;
  }

  textureLoader.load(texturePath, (t) => {
    t.flipY = false;

    textureLoaderCache[texturePath] = t;

    ref.current.material.map = t;
    ref.current.material.needsUpdate = true;
  });
};

export default useTexture;
