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
import ExoticAUtoDeleteCards from "./lgcomponents/components/ExoticAutoDeleteCards";
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
import SamExoticAUtoDeleteCards from "./samsungcomponents/components/ExoticAutoDeleteCards";
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
import SonyExoticAUtoDeleteCards from "./sonycomponents/components/ExoticAutoDeleteCards";
// SONY COMPONENTS END HERE----------------------------------------------->

// Importing Components FOR ifbcomponents------------------------------> start
import IfbOffers from "./ifb/components/Offers";
import IfbNavbar from "./ifb/components/Navbar";
import IfbNavbarCommon from "./ifb/components/NavbarCommon";
import IfbCarousal from "./ifb/components/Carousal";
import IfbGridMultiService from "./ifb/components/GridMultiService";
import IfbFooter from "./ifb/components/Footer";
import IfbBookNowCards from "./ifb/components/BookNowCards";
import IfbTroubleshootCards from "./ifb/components/TroubleshootCards";
import IfbChimney from "./ifb/components/ChimneyComponent";
import IfbWashingMachine from "./ifb/components/WashingMachine";
import IfbMicroWave from "./ifb/components/MicroWave";
import IfbAirConditioner from "./ifb/components/AirConditioner";
// import { ProductData } from "./ProductData";
import IfbAllProducts from "./ifb/components/AllProducts";
import IfbRefrigerator from "./ifb/components/Refrigerator";
import IfbDishwasher from "./ifb/components/DishWasher";
import IfbChatbot from "./ifb/components/AssestComponents/Chatbot";
import IfbContactUsFloating from "./ifb/components/AssestComponents/ContactUsFloating";
import IfbExoticAUtoDeleteCards from "./ifb/components/ExoticAutoDeleteCards";
// importing Components FOR ifbcomponents------------------------------> end
// Importing Components FOR ONIDAcomponents------------------------------> start
import OnidaOffers from "./onida/components/Offers";
import OnidaNavbar from "./onida/components/Navbar";
import OnidaNavbarCommon from "./onida/components/NavbarCommon";
import OnidaCarousal from "./onida/components/Carousal";
import OnidaGridMultiService from "./onida/components/GridMultiService";
import OnidaFooter from "./onida/components/Footer";
import OnidaBookNowCards from "./onida/components/BookNowCards";
import OnidaTroubleshootCards from "./onida/components/TroubleshootCards";
import OnidaTvComponent from "./onida/components/TvComponent";
import OnidaWashingMachine from "./onida/components/WashingMachine";
import OnidaMicroWave from "./onida/components/MicroWave";
import OnidaAirConditioner from "./onida/components/AirConditioner";
// import { ProductData } from "./ProductData";
import OnidaAllProducts from "./onida/components/AllProducts";
import OnidaRefrigerator from "./onida/components/Refrigerator";
import OnidaDishwasher from "./onida/components/DishWasher";
import OnidaChatbot from "./onida/components/AssestComponents/Chatbot";
import OnidaContactUsFloating from "./onida/components/AssestComponents/ContactUsFloating";
import OnidaExoticAUtoDeleteCards from "./onida/components/ExoticAutoDeleteCards";
// importing Components FOR ONIDAcomponents------------------------------> end
// Importing Components FOR WHIRLPOOLcomponents------------------------------> start
import WpOffers from "./whirlpool/components/Offers";
import WpNavbar from "./whirlpool/components/Navbar";
import WpNavbarCommon from "./whirlpool/components/NavbarCommon";
import WpCarousal from "./whirlpool/components/Carousal";
import WpGridMultiService from "./whirlpool/components/GridMultiService";
import WpFooter from "./whirlpool/components/Footer";
import WpBookNowCards from "./whirlpool/components/BookNowCards";
import WpTroubleshootCards from "./whirlpool/components/TroubleshootCards";
import WpTvComponent from "./whirlpool/components/TvComponent";
import WpWashingMachine from "./whirlpool/components/WashingMachine";
import WpMicroWave from "./whirlpool/components/MicroWave";
import WpAirConditioner from "./whirlpool/components/AirConditioner";
// import { ProductData } from "./ProductData";
import WpAllProducts from "./whirlpool/components/AllProducts";
import WpRefrigerator from "./whirlpool/components/Refrigerator";
import WpDishwasher from "./whirlpool/components/DishWasher";
import WpChatbot from "./whirlpool/components/AssestComponents/Chatbot";
import WpContactUsFloating from "./whirlpool/components/AssestComponents/ContactUsFloating";
import WpExoticAUtoDeleteCards from "./whirlpool/components/ExoticAutoDeleteCards";
// importing Components FOR WHIRLPOOLcomponents------------------------------> end
// Importing Components FOR PHILLIPScomponents------------------------------> start
import PhillipsOffers from "./phillips/components/Offers";
import PhillipsNavbar from "./phillips/components/Navbar";
import PhillipsNavbarCommon from "./phillips/components/NavbarCommon";
import PhillipsCarousal from "./phillips/components/Carousal";
import PhillipsGridMultiService from "./phillips/components/GridMultiService";
import PhillipsFooter from "./phillips/components/Footer";
import PhillipsBookNowCards from "./phillips/components/BookNowCards";
import PhillipsTroubleshootCards from "./phillips/components/TroubleshootCards";
import PhillipsTvComponent from "./phillips/components/TvComponent";
import PhillipsWashingMachine from "./phillips/components/WashingMachine";
import PhillipsMicroWave from "./phillips/components/MicroWave";
import PhillipsAirConditioner from "./phillips/components/AirConditioner";
// import { ProductData } from "./ProductData";
import PhillipsAllProducts from "./phillips/components/AllProducts";
import PhillipsRefrigerator from "./phillips/components/Refrigerator";
import PhillipsDishwasher from "./phillips/components/DishWasher";
import PhillipsChatbot from "./phillips/components/AssestComponents/Chatbot";
import PhillipsContactUsFloating from "./phillips/components/AssestComponents/ContactUsFloating";
import PhillipsExoticAUtoDeleteCards from "./phillips/components/ExoticAutoDeleteCards";
// importing Components FOR PHILLIPScomponents------------------------------> end

// DEMO COMPONENTS START---------->
import GoogleClone from "./democomponents/GoogleClone";
import Hombale from "./democomponents/Homebale";
// DEMO COMPONENTS END  ---------->

// Context Resource
import { createContext } from "react";

// Context Functionality
export const AppContext = createContext();

function App() {
  return (
    <AppContext.Provider value={{}}>
      <Router>
        <Routes>
          <Route
            path="commercialdatabasealigned/"
            element={
              <>
                <GoogleClone />
              </>
            }
          />
          <Route
            path="homebale/"
            element={
              <>
                <Hombale />
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

          {/* Troubleshoot Page */}
          <Route
            path="lg/exoticdeletecards"
            element={
              <>
                <Offers />
                <Navbar />
                <ExoticAUtoDeleteCards />
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

          {/* Troubleshoot Page */}
          <Route
            path="samsung/exoticdeletecards"
            element={
              <>
                <SamOffers />
                <SamNavbar />
                <SamExoticAUtoDeleteCards />
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
          {/* Troubleshoot Page */}
          <Route
            path="sony/exoticdeletecards"
            element={
              <>
                <SonyOffers />
                <SonyNavbar />
                <SonyExoticAUtoDeleteCards />
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

          {/* IFB COMPONENTS START HERE ---------------------------> */}
          <Route
            path="ifb/"
            element={
              <>
                <IfbOffers />
                <IfbNavbarCommon />
                <IfbCarousal />
                <IfbGridMultiService />
                <IfbChatbot />
                <IfbContactUsFloating />
                <IfbFooter />
              </>
            }
          />

          {/* BookNow Page */}
          <Route
            path="ifb/book-now"
            element={
              <>
                <IfbOffers />
                <IfbNavbar />
                <IfbBookNowCards />
                <IfbChatbot />
                <IfbContactUsFloating />
                <IfbFooter />
              </>
            }
          />

          {/* Troubleshoot Page */}
          <Route
            path="ifb/troubleshoot"
            element={
              <>
                <IfbOffers />
                <IfbNavbar />
                <IfbTroubleshootCards />
                <IfbChatbot />
                <IfbContactUsFloating />
                <IfbFooter />
              </>
            }
          />

          <Route
            path="ifb/exoticdeletecards"
            element={
              <>
                <IfbOffers />
                <IfbNavbar />
                <IfbExoticAUtoDeleteCards />
                <IfbChatbot />
                <IfbContactUsFloating />
                <IfbFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="ifb/chimney"
            element={
              <>
                <IfbOffers />
                <IfbNavbar />
                <IfbChimney />
                <IfbChatbot />
                <IfbContactUsFloating />
                <IfbFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="ifb/washing"
            element={
              <>
                <IfbOffers />
                <IfbNavbar />
                <IfbWashingMachine />
                <IfbChatbot />
                <IfbContactUsFloating />
                <IfbFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="ifb/microwave"
            element={
              <>
                <IfbOffers />
                <IfbNavbar />
                <IfbMicroWave />
                <IfbChatbot />
                <IfbContactUsFloating />
                <IfbFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="ifb/Refrigerator"
            element={
              <>
                <IfbOffers />
                <IfbNavbar />
                <IfbRefrigerator />
                <IfbChatbot />
                <IfbContactUsFloating />
                <IfbFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="ifb/DishWasher"
            element={
              <>
                <IfbOffers />
                <IfbNavbar />
                <IfbDishwasher />
                <IfbChatbot />
                <IfbContactUsFloating />
                <IfbFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="ifb/aircondition"
            element={
              <>
                <IfbOffers />
                <IfbNavbar />
                <IfbAirConditioner />
                <IfbChatbot />
                <IfbContactUsFloating />
                <IfbFooter />
              </>
            }
          />

          {/* All products Page */}
          <Route
            path="ifb/products"
            element={
              <>
                <IfbOffers />
                <IfbNavbar />
                <IfbAllProducts />
                <IfbChatbot />
                <IfbContactUsFloating />
                <IfbFooter />
              </>
            }
          />
          {/* IFB COMPONENTS END HERE -------------------------->  */}
          {/* ONIDA COMPONENTS START HERE ---------------------------> */}
          <Route
            path="onida/"
            element={
              <>
                <OnidaOffers />
                <OnidaNavbarCommon />
                <OnidaCarousal />
                <OnidaGridMultiService />
                <OnidaChatbot />
                <OnidaContactUsFloating />
                <OnidaFooter />
              </>
            }
          />

          {/* BookNow Page */}
          <Route
            path="onida/book-now"
            element={
              <>
                <OnidaOffers />
                <OnidaNavbar />
                <OnidaBookNowCards />
                <OnidaChatbot />
                <OnidaContactUsFloating />
                <OnidaFooter />
              </>
            }
          />

          {/* Troubleshoot Page */}
          <Route
            path="onida/troubleshoot"
            element={
              <>
                <OnidaOffers />
                <OnidaNavbar />
                <OnidaTroubleshootCards />
                <OnidaChatbot />
                <OnidaContactUsFloating />
                <OnidaFooter />
              </>
            }
          />
          {/* Troubleshoot Page */}
          <Route
            path="onida/exoticdeletecards"
            element={
              <>
                <OnidaOffers />
                <OnidaNavbar />
                <OnidaExoticAUtoDeleteCards />
                <OnidaChatbot />
                <OnidaContactUsFloating />
                <OnidaFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="onida/tv"
            element={
              <>
                <OnidaOffers />
                <OnidaNavbar />
                <OnidaTvComponent />
                <OnidaChatbot />
                <OnidaContactUsFloating />
                <OnidaFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="onida/washing"
            element={
              <>
                <OnidaOffers />
                <OnidaNavbar />
                <OnidaWashingMachine />
                <OnidaChatbot />
                <OnidaContactUsFloating />
                <OnidaFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="onida/microwave"
            element={
              <>
                <OnidaOffers />
                <OnidaNavbar />
                <OnidaMicroWave />
                <OnidaChatbot />
                <OnidaContactUsFloating />
                <OnidaFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="onida/Refrigerator"
            element={
              <>
                <OnidaOffers />
                <OnidaNavbar />
                <OnidaRefrigerator />
                <OnidaChatbot />
                <OnidaContactUsFloating />
                <OnidaFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="onida/DishWasher"
            element={
              <>
                <OnidaOffers />
                <OnidaNavbar />
                <OnidaDishwasher />
                <OnidaChatbot />
                <OnidaContactUsFloating />
                <OnidaFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="onida/aircondition"
            element={
              <>
                <OnidaOffers />
                <OnidaNavbar />
                <OnidaAirConditioner />
                <OnidaChatbot />
                <OnidaContactUsFloating />
                <OnidaFooter />
              </>
            }
          />

          {/* All products Page */}
          <Route
            path="onida/products"
            element={
              <>
                <OnidaOffers />
                <OnidaNavbar />
                <OnidaAllProducts />
                <OnidaChatbot />
                <OnidaContactUsFloating />
                <OnidaFooter />
              </>
            }
          />
          {/* ONIDA COMPONENTS END HERE -------------------------->  */}
          {/* WHIRLPOOL COMPONENTS START HERE ---------------------------> */}
          <Route
            path="whirlpool/"
            element={
              <>
                <WpOffers />
                <WpNavbarCommon />
                <WpCarousal />
                <WpGridMultiService />
                <WpChatbot />
                <WpContactUsFloating />
                <WpFooter />
              </>
            }
          />

          {/* BookNow Page */}
          <Route
            path="whirlpool/book-now"
            element={
              <>
                <WpOffers />
                <WpNavbar />
                <WpBookNowCards />
                <WpChatbot />
                <WpContactUsFloating />
                <WpFooter />
              </>
            }
          />

          {/* Troubleshoot Page */}
          <Route
            path="whirlpool/troubleshoot"
            element={
              <>
                <WpOffers />
                <WpNavbar />
                <WpTroubleshootCards />
                <WpChatbot />
                <WpContactUsFloating />
                <WpFooter />
              </>
            }
          />

          {/* Troubleshoot Page */}
          <Route
            path="whirlpool/exoticdeletecards"
            element={
              <>
                <WpOffers />
                <WpNavbar />
                <WpExoticAUtoDeleteCards />
                <WpChatbot />
                <WpContactUsFloating />
                <WpFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="whirlpool/tv"
            element={
              <>
                <WpOffers />
                <WpNavbar />
                <WpTvComponent />
                <WpChatbot />
                <WpContactUsFloating />
                <WpFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="whirlpool/washing"
            element={
              <>
                <WpOffers />
                <WpNavbar />
                <WpWashingMachine />
                <WpChatbot />
                <WpContactUsFloating />
                <WpFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="whirlpool/microwave"
            element={
              <>
                <WpOffers />
                <WpNavbar />
                <WpMicroWave />
                <WpChatbot />
                <WpContactUsFloating />
                <WpFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="whirlpool/Refrigerator"
            element={
              <>
                <WpOffers />
                <WpNavbar />
                <WpRefrigerator />
                <WpChatbot />
                <WpContactUsFloating />
                <WpFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="whirlpool/DishWasher"
            element={
              <>
                <WpOffers />
                <WpNavbar />
                <WpDishwasher />
                <WpChatbot />
                <WpContactUsFloating />
                <WpFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="whirlpool/aircondition"
            element={
              <>
                <WpOffers />
                <WpNavbar />
                <WpAirConditioner />
                <WpChatbot />
                <WpContactUsFloating />
                <WpFooter />
              </>
            }
          />

          {/* All products Page */}
          <Route
            path="whirlpool/products"
            element={
              <>
                <WpOffers />
                <WpNavbar />
                <WpAllProducts />
                <WpChatbot />
                <WpContactUsFloating />
                <WpFooter />
              </>
            }
          />
          {/* WHIRLPOOL COMPONENTS END HERE -------------------------->  */}
          {/* PHILLIPS COMPONENTS START HERE ---------------------------> */}
          <Route
            path="phillips/"
            element={
              <>
                <PhillipsOffers />
                <PhillipsNavbarCommon />
                <PhillipsCarousal />
                <PhillipsGridMultiService />
                <PhillipsChatbot />
                <PhillipsContactUsFloating />
                <PhillipsFooter />
              </>
            }
          />

          {/* BookNow Page */}
          <Route
            path="phillips/book-now"
            element={
              <>
                <PhillipsOffers />
                <PhillipsNavbar />
                <PhillipsBookNowCards />
                <PhillipsChatbot />
                <PhillipsContactUsFloating />
                <PhillipsFooter />
              </>
            }
          />

          {/* Troubleshoot Page */}
          <Route
            path="phillips/troubleshoot"
            element={
              <>
                <PhillipsOffers />
                <PhillipsNavbar />
                <PhillipsTroubleshootCards />
                <PhillipsChatbot />
                <PhillipsContactUsFloating />
                <PhillipsFooter />
              </>
            }
          />
          {/* Troubleshoot Page */}
          <Route
            path="phillips/exoticdeletecards"
            element={
              <>
                <PhillipsOffers />
                <PhillipsNavbar />
                <PhillipsExoticAUtoDeleteCards />
                <PhillipsChatbot />
                <PhillipsContactUsFloating />
                <PhillipsFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="phillips/tv"
            element={
              <>
                <PhillipsOffers />
                <PhillipsNavbar />
                <PhillipsTvComponent />
                <PhillipsChatbot />
                <PhillipsContactUsFloating />
                <PhillipsFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="phillips/washing"
            element={
              <>
                <PhillipsOffers />
                <PhillipsNavbar />
                <PhillipsWashingMachine />
                <PhillipsChatbot />
                <PhillipsContactUsFloating />
                <PhillipsFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="phillips/microwave"
            element={
              <>
                <PhillipsOffers />
                <PhillipsNavbar />
                <PhillipsMicroWave />
                <PhillipsChatbot />
                <PhillipsContactUsFloating />
                <PhillipsFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="phillips/Refrigerator"
            element={
              <>
                <PhillipsOffers />
                <PhillipsNavbar />
                <PhillipsRefrigerator />
                <PhillipsChatbot />
                <PhillipsContactUsFloating />
                <PhillipsFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="phillips/DishWasher"
            element={
              <>
                <PhillipsOffers />
                <PhillipsNavbar />
                <PhillipsDishwasher />
                <PhillipsChatbot />
                <PhillipsContactUsFloating />
                <PhillipsFooter />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="phillips/aircondition"
            element={
              <>
                <PhillipsOffers />
                <PhillipsNavbar />
                <PhillipsAirConditioner />
                <PhillipsChatbot />
                <PhillipsContactUsFloating />
                <PhillipsFooter />
              </>
            }
          />

          {/* All products Page */}
          <Route
            path="Phillips/products"
            element={
              <>
                <PhillipsOffers />
                <PhillipsNavbar />
                <PhillipsAllProducts />
                <PhillipsChatbot />
                <PhillipsContactUsFloating />
                <PhillipsFooter />
              </>
            }
          />
          {/* PHILLIPS COMPONENTS END HERE -------------------------->  */}
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
