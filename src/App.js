import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

// Importing Components FOR lgcomponents------------------------------> start
import Offers from "./lgcomponents/components/Offers";
import Navbar from "./lgcomponents/components/Navbar";
import NavbarCommon from "./lgcomponents/components/NavbarCommon";
import Carousal from "./lgcomponents/components/Carousal";
import GridMultiService from "./lgcomponents/components/GridMultiService";
import Footer from "./lgcomponents/components/Footer";
import BookNowCards from "./lgcomponents/components/BookNowCards";
import TroubleshootCards from "./lgcomponents/components/TroubleshootCards";
import TvComponent from "./lgcomponents/components/TvComponent";
import WashingMachine from "./lgcomponents/components/WashingMachine";
import MicroWave from "./lgcomponents/components/MicroWave";
import AirConditioner from "./lgcomponents/components/AirConditioner";
import { ProductData } from "./ProductData";
import AllProducts from "./lgcomponents/components/AllProducts";
import Refrigerator from "./lgcomponents/components/Refrigerator";
import Dishwasher from "./lgcomponents/components/DishWasher";
import Chatbot from "./lgcomponents/components/AssestComponents/Chatbot";
import ContactUsFloating from "./lgcomponents/components/AssestComponents/ContactUsFloating";
// importing Components FOR lgcomponents------------------------------> end

// SAMSUNG COMPONENTS START HERE------------------------------------------->
import SamOffers from "./samsungcomponents/components/Offers";
import SamNavbar from "./samsungcomponents/components/Navbar";
import SamNavbarCommon from "./samsungcomponents/components/NavbarCommon";
import SamCarousal from "./samsungcomponents/components/Carousal";
import SamGridMultiService from "./samsungcomponents/components/GridMultiService";
import SamFooter from "./samsungcomponents/components/Footer";
import SamBookNowCards from "./samsungcomponents/components/BookNowCards";
import SamTroubleshootCards from "./samsungcomponents/components/TroubleshootCards";
import SamTvComponent from "./samsungcomponents/components/TvComponent";
import SamWashingMachine from "./samsungcomponents/components/WashingMachine";
import SamMicroWave from "./samsungcomponents/components/MicroWave";
import SamAirConditioner from "./samsungcomponents/components/AirConditioner";
// import { ProductData } from "./ProductData";
import SamAllProducts from "./samsungcomponents/components/AllProducts";
import SamRefrigerator from "./samsungcomponents/components/Refrigerator";
import SamDishwasher from "./samsungcomponents/components/DishWasher";
import SamChatbot from "./samsungcomponents/components/AssestComponents/Chatbot";
import SamContactUsFloating from "./samsungcomponents/components/AssestComponents/ContactUsFloating";
// SAMSUNG COMPONENTS END HERE----------------------------------------------->

// SONY COMPONENTS START HERE------------------------------------------->
import SonyOffers from "./sonycomponents/components/Offers";
import SonyNavbar from "./sonycomponents/components/Navbar";
import SonyNavbarCommon from "./sonycomponents/components/NavbarCommon";
import SonyCarousal from "./sonycomponents/components/Carousal";
import SonyGridMultiService from "./sonycomponents/components/GridMultiService";
import SonyFooter from "./sonycomponents/components/Footer";
import SonyBookNowCards from "./sonycomponents/components/BookNowCards";
import SonyTroubleshootCards from "./sonycomponents/components/TroubleshootCards";
import SonyTvComponent from "./sonycomponents/components/TvComponent";
import SonyMusicStereo from "./sonycomponents/components/MusicStereo";
import SonyPlayStation from "./sonycomponents/components/PlayStation";
import SonyChatbot from "./sonycomponents/components/AssestComponents/Chatbot";
import SonyContactUsFloating from "./sonycomponents/components/AssestComponents/ContactUsFloating";
// SONY COMPONENTS END HERE----------------------------------------------->

// DEMO COMPONENTS START---------->
import GoogleClone from "./democomponents/GoogleClone";
// DEMO COMPONENTS END  ---------->

// Context Resource
import { createContext } from "react";

// Context Functionality
export const AppContext = createContext();

function App() {
  // console.log(ProductData);
  // --> book now
  const [book, setBook] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      service: "Television Repair",
      preferredDate: "2024-12-20",
      preferredTime: "10:00 AM",
      address: "123 Main St, City, Country",
      comments: "Please handle the screen with care.",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      service: "Washing Machine Repair",
      preferredDate: "2024-12-21",
      preferredTime: "2:00 PM",
      address: "456 Oak St, City, Country",
      comments: "The washing machine is making noise.",
    },
  ]);

  // --> Trouble shoot
  const [trouble, settrouble] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      service: "Television",
      issue: "Screen flickering",
      description: "The screen flickers intermittently during usage.",
      preferredDate: "2024-12-20",
      preferredTime: "10:00 AM",
      address: "123 Main St, City, Country",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      service: "Washing Machine",
      issue: "Not spinning",
      description: "The washing machine starts but doesn’t spin the clothes.",
      preferredDate: "2024-12-21",
      preferredTime: "2:00 PM",
      address: "456 Oak St, City, Country",
    },
  ]);

  return (
    <AppContext.Provider value={{ book, trouble, setBook, settrouble }}>
      <Router>
        <Routes>
          <Route
            path="googleclone/"
            element={
              <>
                <GoogleClone />
              </>
            }
          />
          {/* LG COMPONENTS START HERE ---------------------------> */}
          <Route
            path="lg/"
            element={
              <>
                <Offers />
                <NavbarCommon />
                <Carousal />
                <GridMultiService />
                <Chatbot />
                <ContactUsFloating />
                <Footer />
              </>
            }
          />

          {/* BookNow Page */}
          <Route
            path="lg/book-now"
            element={
              <>
                <Offers />
                <Navbar />
                <BookNowCards />
                <Chatbot />
                <ContactUsFloating />
                <Footer />
              </>
            }
          />

          {/* Troubleshoot Page */}
          <Route
            path="lg/troubleshoot"
            element={
              <>
                <Offers />
                <Navbar />
                <TroubleshootCards />
                <Chatbot />
                <ContactUsFloating />
                <Footer />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="lg/tv"
            element={
              <>
                <Offers />
                <Navbar />
                <TvComponent />
                <Chatbot />
                <ContactUsFloating />
                <Footer />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="/lg/washing"
            element={
              <>
                <Offers />
                <Navbar />
                <WashingMachine />
                <Chatbot />
                <ContactUsFloating />
                <Footer />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="lg/microwave"
            element={
              <>
                <Offers />
                <Navbar />
                <MicroWave />
                <Chatbot />
                <ContactUsFloating />
                <Footer />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="lg/Refrigerator"
            element={
              <>
                <Offers />
                <Navbar />
                <Refrigerator />
                <Chatbot />
                <ContactUsFloating />
                <Footer />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="lg/DishWasher"
            element={
              <>
                <Offers />
                <Navbar />
                <Dishwasher />
                <Chatbot />
                <ContactUsFloating />
                <Footer />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="lg/aircondition"
            element={
              <>
                <Offers />
                <Navbar />
                <AirConditioner />
                <Chatbot />
                <ContactUsFloating />
                <Footer />
              </>
            }
          />

          {/* All products Page */}
          <Route
            path="lg/products"
            element={
              <>
                <Offers />
                <Navbar />
                <AllProducts />
                <Chatbot />
                <ContactUsFloating />
                <Footer />
              </>
            }
          />
          {/* LG COMPONENTS END HERE -------------------------->  */}
          {/* SAMSUNG COMPONENTS START HERE-------------------------------> */}
          <Route
            path="samsung/"
            element={
              <>
                <SamOffers />
                <SamNavbarCommon />
                <SamCarousal />
                <SamGridMultiService />
                <SamChatbot />
                <SamContactUsFloating />
                <SamFooter />
              </>
            }
          />

          {/* BookNow Page */}
          <Route
            path="samsung/book-now"
            element={
              <>
                <SamOffers />
                <SamNavbar />
                <SamBookNowCards />
                <SamChatbot />
                <SamContactUsFloating />
                <SamFooter />
              </>
            }
          />

          {/* Troubleshoot Page */}
          <Route
            path="samsung/troubleshoot"
            element={
              <>
                <SamOffers />
                <SamNavbar />
                <SamTroubleshootCards />
                <SamChatbot />
                <SamContactUsFloating />
                <SamFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="samsung/tv"
            element={
              <>
                <SamOffers />
                <SamNavbar />
                <SamTvComponent />
                <SamChatbot />
                <SamContactUsFloating />
                <SamFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="samsung/washing"
            element={
              <>
                <SamOffers />
                <SamNavbar />
                <SamWashingMachine />
                <SamChatbot />
                <SamContactUsFloating />
                <SamFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="samsung/microwave"
            element={
              <>
                <SamOffers />
                <SamNavbar />
                <SamMicroWave />
                <SamChatbot />
                <SamContactUsFloating />
                <SamFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="samsung/Refrigerator"
            element={
              <>
                <SamOffers />
                <SamNavbar />
                <SamRefrigerator />
                <SamChatbot />
                <SamContactUsFloating />
                <SamFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="samsung/DishWasher"
            element={
              <>
                <SamOffers />
                <SamNavbar />
                <SamDishwasher />
                <SamChatbot />
                <SamContactUsFloating />
                <SamFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="samsung/aircondition"
            element={
              <>
                <SamOffers />
                <SamNavbar />
                <SamAirConditioner />
                <SamChatbot />
                <SamContactUsFloating />
                <SamFooter />
              </>
            }
          />

          {/* All products Page */}
          <Route
            path="samsung/products"
            element={
              <>
                <SamOffers />
                <SamNavbar />
                <SamAllProducts />
                <SamChatbot />
                <SamContactUsFloating />
                <SamFooter />
              </>
            }
          />
          {/* SAMSUNG COMPONENTS END HERE--------------------------------- */}
          {/* SONY COMPONENTS START HERE ---------------------------> */}
          <Route
            path="sony/"
            element={
              <>
                <SonyOffers />
                <SonyNavbarCommon />
                <SonyCarousal />
                <SonyGridMultiService />
                <SonyChatbot />
                <SonyContactUsFloating />
                <SonyFooter />
              </>
            }
          />

          {/* BookNow Page */}
          <Route
            path="sony/book-now"
            element={
              <>
                <SonyOffers />
                <SonyNavbar />
                <SonyBookNowCards />
                <SonyChatbot />
                <SonyContactUsFloating />
                <SonyFooter />
              </>
            }
          />

          {/* Troubleshoot Page */}
          <Route
            path="sony/troubleshoot"
            element={
              <>
                <SonyOffers />
                <SonyNavbar />
                <SonyTroubleshootCards />
                <SonyChatbot />
                <SonyContactUsFloating />
                <SonyFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="sony/tv"
            element={
              <>
                <SonyOffers />
                <SonyNavbar />
                <SonyTvComponent />
                <SonyChatbot />
                <SonyContactUsFloating />
                <SonyFooter />
              </>
            }
          />

          <Route
            path="sony/musicstereo"
            element={
              <>
                <SonyOffers />
                <SonyNavbar />
                <SonyMusicStereo />
                <SonyChatbot />
                <SonyContactUsFloating />
                <SonyFooter />
              </>
            }
          />
          <Route
            path="sony/playstation"
            element={
              <>
                <SonyOffers />
                <SonyNavbar />
                <SonyPlayStation />
                <SonyChatbot />
                <SonyContactUsFloating />
                <SonyFooter />
              </>
            }
          />

          {/* All products Page */}
          <Route
            path="sony/products"
            element={
              <>
                <SonyOffers />
                <Navbar />
                <AllProducts />
                <Chatbot />
                <ContactUsFloating />
                <SonyFooter />
              </>
            }
          />
          {/* SONY COMPONENTS END HERE   ---------------------------> */}
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
