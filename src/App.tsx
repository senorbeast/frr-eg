import { useState } from "react";
import "./App.css";
import { fab, FabImageWithFallback, FabricCanvas } from "fabric-react-renderer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> FabricReactRenderer</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div style={{ border: 2, borderColor: "white" }}>
        <FabricCanvas
          width={800}
          height={600}
          style={{ border: "1px solid #ccc" }}
        >
          <fab.textbox
            text="Hello, world!"
            left={130}
            top={350}
            angle={30}
            mouseUpHandler={() => console.log("textbox mouseup")}
            fill="white"
          />
          <fab.polygon
            left={650}
            top={250}
            fill="pink"
            points={[
              { x: 100, y: 100 },
              { x: 200, y: 100 },
              { x: 300, y: 200 },
            ]}
          />
          <fab.text left={50} top={50} text="Hello, world!" fill="white" />
          <fab.polyline
            left={570}
            top={100}
            points={[
              { x: 100, y: 100 },
              { x: 200, y: 100 },
              { x: 300, y: 200 },
            ]}
            fill="white"
            stroke="red"
          />
          <fab.rect left={250} top={250} width={100} height={100} fill="blue" />
          <fab.rect left={10} top={10} width={100} height={100} fill="red" />
          <fab.ellipse left={450} top={50} rx={60} ry={40} fill="orange" />
          <fab.group objects={[]}>
            <fab.circle left={450} top={350} radius={60} fill="lightgrey" />
            <fab.triangle left={350} top={50} fill="purple" />
          </fab.group>

          <fab.path
            path={[
              ["M", 0, 0],
              ["L", 50, 50],
            ]}
            left={0}
            top={0}
            stroke="yellow"
            strokeWidth={2}
          />
          <FabImageWithFallback
            left={500}
            top={500}
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
          />
        </FabricCanvas>
      </div>
    </>
  );
}

export default App;
