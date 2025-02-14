import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "@/pages/Homepage/ui/Homepage";
import Layout from "./layout";
import SignIn from "@/pages/SignIn/ui/SignIn";
import SignUp from "@/pages/SignUp/ui/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
