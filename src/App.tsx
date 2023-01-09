import * as React from 'react';
//image
import "./assets/cv-pic.jpg";
//components
import Section from './components/Section'

const App: React.FC = () => {
  return (
    <main>
      <Section>
        <img src={require("./assets/cv-pic.jpg")} alt='CV Picture' />
      </Section>
    </main>
  )
}

export default App;
