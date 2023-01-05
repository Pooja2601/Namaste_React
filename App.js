const heading = React.createElement("h1", { className: "heading", style: {color: "white"}}, "Namaste React Developers heading 1");
const heading2 = React.createElement("h2", { id: "heading2"}, "Namaste React Developers heading 2");
const container = React.createElement("div", { className: "container"}, [heading, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);