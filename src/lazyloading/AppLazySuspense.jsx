import React, { lazy, Suspense, useState } from "react";
const LazySuspense = lazy(() => import('./LazySuspense'));

export default function AppLazySuspense() {

    const [LazyComponent, setLazyComponent] = useState(false);

    const handleClick = () => {
        setLazyComponent(true);
    };

  return (
    <>
      <main>
        <h1>Lazy Loading with Suspense</h1>
        <button onClick={handleClick}>Load LazyComponent</button>
        <Suspense fallback={<div>Loading...</div>}>
            {LazyComponent ? <LazySuspense /> : null}
        </Suspense>
      </main>
    </>
  );
}