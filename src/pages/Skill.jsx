import React from 'react'
import Container from '../components/Container'
import Tech from '../components/Tech'
import { useOutletContext } from 'react-router-dom';

function Skill() {

  const { theme } = useOutletContext(); // Get live theme from context

  return (
    <Container>
          <Tech theme={theme} />
    </Container>
  )
}

export default Skill