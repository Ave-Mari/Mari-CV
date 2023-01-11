import * as React from 'react';
//image
import Avatar from "./assets/cv-pic.jpg";
//components
import Section from './components/Section'
import Skill from './components/Skill/Skill'
//styles


const App: React.FC = () => {
  return (
    <main>
      <Section>
        <img src={Avatar} alt='CV Picture' className='avatar'/>
      </Section>
      <Section
      title="Основная информация"
      ></Section>
    </main>
  )
}

export default App;
