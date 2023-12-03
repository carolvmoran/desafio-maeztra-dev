import React from "react";

import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Carousel from "../components/Banners/Carousel";
import CarouselProductCards from "../components/ProductCards/CarouselProductCards";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Carousel />
        <CarouselProductCards />
      </main>
      <Footer />
    </>
  );
};

export { Home };
