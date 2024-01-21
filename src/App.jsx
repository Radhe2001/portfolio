import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <div className="text text-left mr-auto"></div> */}
      <div className="h-screen w-full ">
        <BrowserRouter>
          <header className="fixed w-full">
            <Navbar />
          </header>
          <div className="pt-12">
            <Routes>
              <Route path="/" Component={Home}></Route>
              <Route path="/:id" Component={Home}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
