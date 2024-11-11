import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Rooms from "./components/pages/Rooms";
import Contact from "./components/pages/Contact";
import RoomDetails from "./components/pages/RoomDetails";
import Booking from "./components/pages/Booking";
import NotFound from "./components/pages/NotFound";
import ThankYouBooking from "./components/pages/ThankYouBooking";
import ThankYouContact from "./components/pages/ThankYouContact";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home />} />
    <Route path="/rooms" element={<Rooms />} />
    <Route path="/rooms/:roomId" element={<RoomDetails/>} /> 
    <Route path="/rooms/:id" element={<Rooms />} />
    <Route path="/booking/:id" element={<Booking />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/thank-you-booking" element={<ThankYouBooking />} />
    <Route path="/thank-you-contact" element={<ThankYouContact />} />
    <Route path='*' element={<NotFound />} />
  </Route>
));
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
