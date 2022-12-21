import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Landing from "./Pages/landing";
import FormData from "./Pages/FormData";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/formData" element={<FormData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
