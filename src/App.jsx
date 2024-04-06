import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Events from './Pages/Events';
import Blogs from './Pages/Blogs';
import BlogsDetails from './Pages/BlogsDetails';
import ContactUs from './Pages/ContactUs';
import StudentResources from './Pages/StudentResources';
import NoPage from './Pages/NoPage';

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in',
      delay: 100,
  });
});
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogsDetails />} />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<StudentResources />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      </BrowserRouter> 
    </>
  )
};

export default App;
