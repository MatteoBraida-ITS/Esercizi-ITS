import "./App.css";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default App;
