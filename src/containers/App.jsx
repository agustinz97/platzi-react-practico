import React from "react";

import "../assets/styles/App.scss";
import Header from "../components/Header";
import Search from "../components/Search";
import Footer from "../components/Footer";

import Categories from "../components/Categories";
import Carrousel from "../components/Carrousel";
import CarrouselItem from "../components/CarrouselItem";

const App = () => (
  <div className="App">
    <Header />
    <Search />

    <Categories title="Mi lista">
      <Carrousel>
        <CarrouselItem />
        <CarrouselItem />
        <CarrouselItem />
        <CarrouselItem />
        <CarrouselItem />
        <CarrouselItem />
      </Carrousel>
    </Categories>

    <Categories title="Tendencias">
      <Carrousel>
        <CarrouselItem />
        <CarrouselItem />
        <CarrouselItem />
        <CarrouselItem />
      </Carrousel>
    </Categories>

    <Categories title="Originales de Platzi Video">
      <Carrousel>
        <CarrouselItem />
        <CarrouselItem />
      </Carrousel>
    </Categories>

    <Footer />
  </div>
);

export default App;
