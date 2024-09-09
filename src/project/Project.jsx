import React, { useState } from "react";
// import ImageGallery from "./ImageGallery";

const Project = () => {
  const [isPostsComponent, setIsPostsComponent] = useState(null);

  return (
    <>
      <h1>DYNAMIC API IMPORT!</h1>
      <button
        onClick={() => {
          import("../project/ImageGallery.jsx").then((module) => {
            const isPostsData = module.default || module;

            setIsPostsComponent(() => isPostsData);
          });
        }}
      >
        Show Posts!
      </button>

      <br />
      <br />

      {/* Display Result of the import */}
      <div>
        <h2>Dynamic Import Post:</h2>
        <div>
          <isPostsComponent />
        </div>
      </div>
    </>
  );
};

export default Project;
