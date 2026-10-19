import { useState } from "react";

function LightDarkMode() {
  const [isDarkmode, setDarkmode] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: 200 }}>
      <span
        style={{
          backgroundColor: isDarkmode ? "black" : "white",
          color: isDarkmode ? "white" : "black",
          borderRadius: 10,
          display: "flex",
          justifyContent: "center",
          padding: 5,
          marginBottom: 10,
        }}
      >
        {isDarkmode ? "Dark mode" : "Light mode"}
      </span>
      <button
        onClick={() => {
          setDarkmode(!isDarkmode);
        }}
      >
        Cambia modalità
      </button>
    </div>
  );
}
export default LightDarkMode;
