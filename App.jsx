import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const Main = () => <h1>This is Test Element</h1>;

// React Component
const HeadingComponent = () => {
  const title = "Stock Market";

  return (
    <>
      {4+5}
      <Main />
      <h1>This is Heading {title}</h1>
      <h2>This is Secondary Heading</h2>
    </>
  );
};

// Root render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
