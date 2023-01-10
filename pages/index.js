import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Footer } from "./components/Footer/Footer";
import { HeroTextArea } from "./components/Hero/HeroTextArea";
import { HeroImageArea } from "./components/Hero/HeroImageArea";

import { useFakeDataBase } from "./hooks/useFakeDataBase";

export default function Home() {
  const { products, cartItems, addToCard, removeFromCard } = useFakeDataBase();

  return (
    <>
      <Header cartItems={cartItems} removeFromCard={removeFromCard} />
      <Hero>
        <HeroImageArea product={products[0]} />
        <HeroTextArea product={products[0]} addToCard={addToCard} />
      </Hero>
      <Footer />
    </>
  );
}
