import Router from "./shared/Router";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
}

export default App;
