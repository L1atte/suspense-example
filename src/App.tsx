import { Suspense } from "react";
import "./App.css";
import { Component } from "./component/Content";
import { Loading } from "./component/loading";
import { Child } from "./component/Child";

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Component></Component>
      </Suspense>
      <Suspense fallback={<h1>loading2</h1>}>
        <Child />
      </Suspense>
    </>
  );
}

export default App;
