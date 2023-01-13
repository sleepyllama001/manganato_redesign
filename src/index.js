import ReactDOM from "react-dom/client";
import App from "./App";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Chapter from "./Chapter";
import Login from "./Login";
import Appdeux from "./Appdeux"
import NoPage from "./NoPage";

export default function Appp() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<App />} /> */}
            {/* <Route path="login" element={<Login />} /> */}
            <Route index element={<Appdeux />} />
            <Route path="chapter" element={<Chapter />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Appp /> );

// const root = ReactDOM.createRoot(document.getElementById("root"))
// foot.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// )

// const foot = ReactDOM.createRoot(document.getElementById("footer"))
// foot.render(
//     <React.StrictMode>
//         <Footer />
//     </React.StrictMode>
// )