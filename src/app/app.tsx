import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "@/pages/Homepage/ui/Homepage";
import Layout from "./layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
