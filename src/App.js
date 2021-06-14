import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
// import Footer from "./footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;