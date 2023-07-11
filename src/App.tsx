import { Suspense } from "react";
import "./App.css";
import { AntherChild } from "./component/AntherChild";
import { Child } from "./component/Child";
import { Component } from "./component/Content";

function App() {
  return (
    <>
      <Suspense fallback={<h1>loading1</h1>}>
        <Component></Component>
      </Suspense>
      <Suspense fallback={<h1>loading2</h1>}>
        <Child />
      </Suspense>
      <Suspense fallback={<h1>loading3</h1>}>
        <AntherChild />
      </Suspense>
    </>
  );
}

export default App;
