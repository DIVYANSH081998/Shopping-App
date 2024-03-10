import Navibar from "./components/Navibar";
import Product from "./components/Product";
import { useState } from "react";
import React from "react";

function App() {
  const [show, setShow] = useState(true);
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <React.Fragment>
      <Navibar setShow={setShow} />
      {show ? <Product /> : "cart"}
  
    </React.Fragment>
  );
}

export default App;
