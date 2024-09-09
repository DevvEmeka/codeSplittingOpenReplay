import React, { useState, Suspense, lazy } from "react";
import "./Amazon_clone.css";

// Lazy load the Navbar and AmazonComponent components
const Navbar = lazy(() => import("./Navbar"));
const AmazonComponent = lazy(() => import("./AmazonComponent"));

function AmazonHomepage() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <main className="homepage">
      <section>
        {/* Use Suspense to wrap the Navbar component */}
        <Suspense fallback={<div>Loading Navbar...</div>}>
          <Navbar />
        </Suspense>
      </section>
      <section className="section_two">
        <h1>Amazon Back To School</h1>
        <div className="gray_line"></div>

        <div className="home_main">
          <div className="grid-container">
            <div className="grid-item">
              <img src="/Backpack.png" alt="Image 1" />
              <div className="title">Backpacks</div>
            </div>
            <div className="grid-item">
              <img src="/Lunch_Box.png" alt="Image 2" />
              <div className="title">Lunch Box</div>
            </div>
            <div className="grid-item">
              <img src="/WaterBottle.png" alt="Image 3" />
              <div className="title">Water Bottle</div>
            </div>
            <div className="grid-item">
              <img src="/FilesNFolder.png" alt="Image 4" />
              <div className="title">Files & Folders</div>
            </div>
            <div className="grid-item">
              <img src="/Planner.png" alt="Image 5" />
              <div className="title">Planner</div>
            </div>
            <div className="grid-item">
              <img src="/Electronics.png" alt="Image 6" />
              <div className="title">Electronics</div>
            </div>
            <div className="grid-item">
              <img src="/Clothes.png" alt="Image 7" />
              <div className="title">Clothing</div>
            </div>
            <div className="grid-item">
              <img src="/Shoes.png" alt="Image 8" />
              <div className="title">Shoes</div>
            </div>
          </div>
          {/* The AmazonComponent component is only loaded when needed */}
          <button style={{fontSize: '24px'}} className="show-more-btn" onClick={handleShowMore}>
            Show More
          </button>
          {showMore && (
            <Suspense fallback={<div>Loading more items...</div>}>
              <AmazonComponent />
            </Suspense>
          )}
        </div>
      </section>
    </main>
  );
}

export default AmazonHomepage;
