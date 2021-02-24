import React from "react";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Gallery from "./pages/Gallery";

function App() {
  return(
    <div>
      <Jumbotron />
      <Wrapper>
        <Gallery />
      </Wrapper>
    </div>
  );
}

export default App;
