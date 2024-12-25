import React, { useEffect, useState } from "react";
import "./Accueill.css"; // Ensure this matches the exact file name
import RideCard from "../others/RideCard";
import SortFilter from "../others/SortFilter";

import TravelSearchBar from "../../Components/TravelSearchBar";
import List from "./list/list";
import Chat from "./chat/chat";
import Detail from "./detail/detail";


const Accueil = () => {
  

  return (<section className="container">
    
    <List/>
    <Chat/>
    <Detail/>

  </section>
    );
};

export default Accueil;
