import { render } from "react-dom";

render(<App />, document.getElementById("root"));

function Header() {
  return <header>THIS IS THE HEADER</header>;
}
function App() {
  return (
    <>
      <Header />
      <h1>hello world!</h1>
    </>
  );
}
