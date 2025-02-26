import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  console.log("App component rendering");
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
