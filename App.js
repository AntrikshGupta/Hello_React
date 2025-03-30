// const heading = React.createElement('h1', {}, 'Hello React! Checking Source ');
const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "Child" }, [
    React.createElement("h1", { id: "head1" }, "Nested Divs in React"),
    React.createElement(
      "h2",
      { id: "head2" },
      "Heading 2 using an array as the third argument in createElement() Method"
    ),
  ])
,React.createElement(
    "h1",
    { id: "heading", xyz: "attribute check" },
    "Hello React! Checking Source "
  )]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
