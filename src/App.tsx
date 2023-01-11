import * as React from 'react';
//image
import Avatar from "./assets/cv-pic.jpg";
//components
import Section from './components/Section'
//styles
import './App.styles'

const App: React.FC = () => {
  return (
    <main>
      <Section>
        <img src={Avatar} alt='CV Picture' className='avatar'/>
      </Section>
    </main>
  )
}

export default App;
