import { Suspense } from "react";
import "./App.css";
import { Component } from "./component/content";
import { Loading } from "./component/loading";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Component></Component>
    </Suspense>
  );
}

export default App;
