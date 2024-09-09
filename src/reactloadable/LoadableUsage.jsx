import React, { useState } from "react";
import Loadable from "react-loadable";


const ProductDetails = Loadable({
  loader: () => import("../reactloadable/ReactLoadable"),
  loading: () => <div>Loading...</div>,
});

function LoadableUsage() {
  const [loadUsers, setLoadUsers] = useState(false);

  const handleClick = () => {
    setLoadUsers(true);
  };

  return (
    <div style={{textAlign : "center"}}>
      <h1>Code-splitting react-loadable</h1>
      <button onClick={handleClick}>Display Users</button>
      <div>{loadUsers && <ProductDetails />}</div>
    </div>
  );
}

export default LoadableUsage;
