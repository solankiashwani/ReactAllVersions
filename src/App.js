import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import { useSpring, a } from "@react-spring/three";

function Obj() {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const [spring, set] = useSpring(() => ({
    position: [0, 0, 0],
    config: { mass: 1, friction: 40, tension: 800 },
  }));
  const bind = useDrag(({ movement: [x, y], down }) =>
    set({
      config: { mass: down ? 1 : 4, tension: down ? 2000 : 800 },
      position: down ? [x / aspect, -y / aspect, 0] : [0, 0, 0],
    })
  );
  return (
    <a.mesh {...spring} {...bind()} castShadow>
      <sphereGeometry args={[1, 64, 64]} />
      <meshNormalMaterial />
    </a.mesh>
  );
}

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={1} />
      <spotLight
        intensity={0.6}
        position={[20, 10, 10]}
        angle={0.15}
        penumbra={1}
        shadow-mapSize={[2048, 2048]}
        castShadow
      />
      <mesh receiveShadow position={[0, 0, -1]}>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial color="springgreen" />
      </mesh>
      <Obj />
    </Canvas>
  );
}

export default App;
