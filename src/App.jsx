import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Rooms from "./components/pages/Rooms";
import Contact from "./components/pages/Contact";
import RoomDetails from "./components/pages/RoomDetails";
import Booking from "./components/pages/Booking";
import NotFound from "./components/pages/NotFound";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home />} />
    <Route path="/rooms" element={<Rooms />} />
    <Route path="/rooms/:roomId" element={<RoomDetails/>} /> 
    <Route path="/rooms/:id" element={<Rooms />} />
    <Route path="/booking/:id" element={<Booking />} />
    <Route path="/contact" element={<Contact />} />
    <Route path='*' element={<NotFound />} />
  </Route>
));
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
