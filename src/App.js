import React from 'react';

import Navmenue from "./components/Navmenue"
import './App.css';
import Section1 from "./components/Section1"
import Patient from "./components/Patient"
import Section3 from "./components/section3"
import Section4 from "./components/Section4"
import Section5 from "./components/Section5"
import Footer from "./components/Footer"

const card1 = {
  title: "For patients",
  subtitle: "Find a doctor, book a visit and solve any health-related doubt",
  image: "https://www.docplanner.com/img/screen-marketplace@2x.png",
  isshown: true
};
const card2 = {
  title: "For doctors",
  subtitle: "Save time managing visits and  cut no-shows by half ",
  image: "https://www.docplanner.com/img/screen-saas@2x.png",
  isshown: false
};





function App() {
  return (
    <div>
      <Navmenue/> 
     
      <Section1 />
      <div className="cards">
        <div className="cardd1">
          <Patient objet={card1} />
        </div>
        <div className="cardd2">
          <Patient objet={card2} />
        </div>
      </div>
      <Section3 />
      <Section4/>
      <Section5/>
      <Footer/>



    



    
     
      
    </div>
    
  );
}

export default App;