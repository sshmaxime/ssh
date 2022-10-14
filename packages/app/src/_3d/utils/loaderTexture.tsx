import { CanvasTexture, TextureLoader } from "three";
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

export const preLoadTexture = (texturePath: string) => {
  const cachedTexture = textureLoaderCache[texturePath];
  if (cachedTexture) {
    return;
  }

  textureLoader.load(texturePath, (t) => {
    t.flipY = false;
    textureLoaderCache[texturePath] = t;
  });
};

export const loadTextureToObject = (texturePath: string, ref: any) => {
  const cachedTexture = textureLoaderCache[texturePath];
  if (cachedTexture) {
    if (ref.current) {
      ref.current.material.map = cachedTexture;
      ref.current.material.needsUpdate = true;
      console.log("loading texture using cache");
    }
    return;
  }

  textureLoader.load(texturePath, (t) => {
    t.flipY = false;

    textureLoaderCache[texturePath] = t;

    if (ref.current) {
      ref.current.material.map = t;
      ref.current.material.needsUpdate = true;
    }
  });
};

const canvasTextureLoaderCache: { [key: number]: THREE.CanvasTexture } = {};
export const loadIdTexture = (newId: number, ref: any) => {
  const cachedTexture = canvasTextureLoaderCache[newId];
  if (cachedTexture) {
    ref.current.map = cachedTexture;
    ref.current.map.needsUpdate = true;
    return;
  }

  const itemId = "#" + newId;

  const canvas = document.createElement("canvas");

  const ctx = canvas.getContext("2d") as any;
  ctx.canvas.width = 500;
  ctx.canvas.height = 500;
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.textAlign = "center";
  ctx.font = "700 50px montserrat";
  ctx.fillStyle = "black";
  ctx.fillText(itemId, ctx.canvas.width / 2, ctx.canvas.height / 2);

  const newMaterial = new CanvasTexture(canvas);

  ref.current.map = newMaterial;
  ref.current.map.needsUpdate = true;
};

export default useTexture;
