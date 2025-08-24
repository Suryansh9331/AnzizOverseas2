import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/Contact/Contact"));


// Layout components
import Footer from "../components/Common/Footer";
import Tools from "../pages/Tools/Tools";
import Sollutions from "../pages/Sollutions/Sollutions";
import Learninghub from "../pages/LearningHub/LearningHub";
import Verified from "../pages/verified/verified";
import Navbar from "../components/Common/Navbar";
import Logistic from "../pages/Logistic/logistic";


const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/tools" element={<Tools />} />
          <Route path='/solutions' element={<Sollutions />} />
          <Route path='/learning-hub' element={<Learninghub />} />
          <Route path='/verified-supplier' element={<Verified />} />
          <Route path="/logistic" element={<Logistic />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default AppRoutes;
