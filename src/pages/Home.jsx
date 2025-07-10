import React from "react";
import { useOutletContext } from "react-router-dom";

import Container from "../components/Container";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Tech from "../components/Tech";
import Contact from "../components/Contact";
import Work from "../components/Work";

function Home() {
  const { theme } = useOutletContext(); // Get live theme from context

  return (
    <Container>
      <Hero theme={theme} />
      <Cards theme={theme} />
      <Tech theme={theme} />
      <Work theme={theme} />
      <Contact theme={theme} />
    </Container>
  );
}

export default Home;
