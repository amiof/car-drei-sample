import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";



function Model(props) {
  const { scene } = useGLTF("/bmw.glb");
  return (<primitive object={scene}{...props} />)
}
function App() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center", width:"100vw", height:"100vh"}}>
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ "position": "absolute",width:"700px",height:"500px",border:"1px solid white" }}>
        <color attach="background" args={["#101010"]} />
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
          <Stage environment={"sunset"}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
      </div>
  );
}

export default App;
