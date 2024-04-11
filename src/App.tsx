import "./App.scss";
import { useBoundStore } from "./stores";

function App() {
  const { count, increment, incrementAsync, students, updateInfo } =
    useBoundStore();

  return (
    <main
      className="main"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontSize: "2rem",
      }}>
      <span>{count}</span>
      <button onClick={increment}>increment</button>
      <button onClick={incrementAsync}>increment after 1000ms</button>

      <div>
        <span>{students.name}</span>
        <span>{students.age}</span>
        <button
          onClick={() => {
            updateInfo({ name: "Jane Doe", age: 25 });
          }}>
          update info
        </button>
        <button
          onClick={() =>
            updateInfo({
              name: "John Doe",
              age: 0,
            })
          }>
          Reset info
        </button>
      </div>
    </main>
  );
}

export default App;
