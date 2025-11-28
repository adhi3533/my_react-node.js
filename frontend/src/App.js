import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then(res => res.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#e6f2ff",  // light blue background
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <h1 style={{ color: "blue" }}>React Frontend</h1>

      <p style={{ color: "blue", fontSize: "20px" }}>
        Backend says: {message}
      </p>
    </div>
  );
}

export default App;
