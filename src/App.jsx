import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <div className="h-[100vh]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
