import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Home from "./screens/Home/Home";

function App() {
    return (
        <div className="App">
            <NavBar />
            <SideBar />
            <div className="main">
                <Home />
            </div>
        </div>
    );
}

export default App;
