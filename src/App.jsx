import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./Layout";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home />} />
    <Route path="/rooms" element={<Rooms />} />
    <Route path="/contact" element={<Contact />} />
  </Route>
));
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App