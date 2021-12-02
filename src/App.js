import { useState } from "react";
import Header from "./components/Header";
import SiderbarNav from "./components/SiderbarNav";
import './style.scss'


const App = () => {

  let [menuState, setMenuState] = useState(false);

  return (
    <>
    <Header menuState={menuState} setMenuState={setMenuState}/>
    <SiderbarNav menuState={menuState} setMenuState={setMenuState}/>
    </>
  );
}

export default App;
