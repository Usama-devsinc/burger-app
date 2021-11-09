import "./App.css";
import logo from "./assets/burger-logi.png";
import Burger from "./components/Burger";
function App() {
  return (
    <>
      <div className="navbar bg-dark">
        <img src={logo} alt="logo" className="logo-img"></img>
        <div className="text">
          <button className="btn btn-info">Burger Builder</button> &nbsp; &nbsp;
          <button className="btn btn-info">Login</button>
        </div>
      </div>
      <div className="burger">
        <Burger />
      </div>
    </>
  );
}

export default App;
