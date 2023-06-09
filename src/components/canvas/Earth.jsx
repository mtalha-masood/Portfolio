import { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader"

const Earth = ({isMobile}) => {
  const earth = useGLTF("./earth/scene.glb")
  return(
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-10, 30, 20]}
        angle={0.1}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        />
      <primitive 
      object={earth.scene} 
      scale={isMobile ? 0.1:0.068}
      position={isMobile ?[0, -4, 1]:[0, -2, 1.1]}
      rotation-y={0}
      />

    </mesh>
  )
}
const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 756px)');

    setIsMobile(mediaQuery.matches);
    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change',handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  return (
    <Canvas
     shadows
     frameloop="demand"
     gl={{ preserveDrawingBuffer: true }}
     camera={{ position: [20, 3, 5], fov: 25 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        <OrbitControls 
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
          <Preload all />
        <Earth isMobile={isMobile} />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;
