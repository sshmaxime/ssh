/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { FC, useRef } from "react";
import { GLTF } from "three-stdlib";
import { Center, useGLTF } from "@react-three/drei";
import useTexture from "../utils/loaderTexture";

type GLTFResult = GLTF & {
  nodes: {
    Tube: THREE.Mesh;
    Tube2_4: THREE.Mesh;
    Tube2_5: THREE.Mesh;
    Tube_1: THREE.Mesh;
    Tube2_1_1: THREE.Mesh;
    Tube2_1_2: THREE.Mesh;
    Tube_2: THREE.Mesh;
    Tube2_2_1: THREE.Mesh;
    Tube2_2_2: THREE.Mesh;
    Tube_3: THREE.Mesh;
    Tube2_3_1: THREE.Mesh;
    Tube2_3_2: THREE.Mesh;
    Absorber1: THREE.Mesh;
    Trucks: THREE.Mesh;
    Deck: THREE.Mesh;
    Placeholder: THREE.Mesh;
  };
  materials: {
    Wheels: THREE.MeshStandardMaterial;
    Trucks: THREE.MeshStandardMaterial;
    Deck: THREE.MeshStandardMaterial;
    Placeholder: THREE.MeshStandardMaterial;
  };
};

const modelPath = "/models/skate/skate-transformed.glb";

export type props = {
  placeholderTexture: THREE.Texture;
  deckTexture: THREE.Texture;
  _id: number;
};

const Skate: FC<props & JSX.IntrinsicElements["group"]> = (props) => {
  const group = useRef<THREE.Group>(null);

  // model
  const { nodes, materials } = useGLTF(modelPath) as GLTFResult;

  // Deck
  materials.Deck.color = null as any;
  materials.Deck.toneMapped = false;

  // // Placeholder
  materials.Placeholder.color = null as any;
  materials.Placeholder.toneMapped = false;

  // itemId
  const itemId = "#" + props._id.toFixed();

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

  const newMaterial = new THREE.CanvasTexture(canvas);

  materials.Deck.map = props.deckTexture;
  materials.Placeholder.map = props.placeholderTexture;

  return (
    <Center alignTop>
      <group ref={group} rotation={[Math.PI / 2, Math.PI / 2, Math.PI]} dispose={null}>
        <mesh
          geometry={nodes.Deck.geometry}
          material={materials.Deck}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Placeholder.geometry}
          material={materials.Placeholder}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh position={[12.8, 6.75, 0]} rotation={[Math.PI / 2, 0, -Math.PI / -2]}>
          <planeGeometry args={[10, 10, 10, 10]} />
          <meshBasicMaterial transparent map={newMaterial} />
        </mesh>
      </group>
    </Center>
  );
};

useGLTF.preload(modelPath);

export default Skate;