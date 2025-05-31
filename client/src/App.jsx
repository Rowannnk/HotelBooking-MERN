/*mkdir HotelBooking
 5801  ls
 5802  cd HotelBooking
 5803  npm create vite@latest\n
 5804  cd client
 5805  npm install
 5806  code .
 5807  npm run dev
 5808* npm install tailwindcss @tailwindcss/vite\n
 5809  npm run dev
 5810  npm run dev\n
 5811* npm install react-router-dom\n
 5812  npm run dev
 5813* npm install @clerk/clerk-react
 5814  npm run dev
 5815  cd ..
 5816  code .
 5817  cd cl
 5818  cd client
 5819  npm run dev */

/* eslint-disable no-constant-binary-expression */
import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import MyBookings from "./pages/MyBookings";
import HotelRegistration from "./components/HotelRegistration";
import Layout from "./pages/hotelOwner/Layout";
import Dashboard from "./pages/hotelOwner/Dashboard";
import AddRoom from "./pages/hotelOwner/AddRoom";
import ListRoom from "./pages/hotelOwner/ListRoom";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnerPath && <Navbar />}
      {false && <HotelRegistration />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
