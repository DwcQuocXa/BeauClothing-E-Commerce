import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import NavBar from "./components/NavBar";
import { getProducts } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
