import * as React from 'react';
//image
import Avatar from "./assets/cv-pic.jpg";
//components
import Section from './components/Section'
import Skill from './components/Skill/Skill'
import Link from './components/Link/Link'
//styles
import './main-styles.css'
//data
import skills from './skills-data'
import projects from './links-projects-data'

const App = () => {
  return (
    <main>
      <Section title='test'>
        <img src={Avatar} alt='CV Picture' className='avatar'/>
      </Section>
        <Section
      title="Основная информация"
      >
        
      </Section>
      <Section
      title="Навыки"
      >
        {skills.map((skill) => <Skill skill={skill} /> )}
      </Section>
      <Section
      title="Проекты"
      >
        {projects.map((link) => <Link title={link.title} href={link.url}/>)}

      </Section> 
    </main>
  )
}

export default App;
