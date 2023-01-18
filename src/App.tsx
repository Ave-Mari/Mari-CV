import * as React from 'react';
//components
import MainSection from './components/MainSection/MainSection'
import Section from './components/Section/Section'
import Skill from './components/Skill/Skill'
import Link from './components/Link/Link'
import Table from './components/Table/Table'
//styles
import './main-styles.css'
//data
import skills from './skills-data'
import projects from './links-projects-data'
import courses from './links-courses-data'

const App = () => {
  return (
    <main>
      <MainSection
      name="Мари Вайпан"
      position='Frontend-разработчик'
      />     
        <Section
      title="Основная информация"
      >
        <Table />
        
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
      <Section
      title="Обо мне"
      >
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsum saepe, nobis ex officiis sed hic assumenda dolorem explicabo, obcaecati consectetur voluptatibus impedit fugit quia beatae laboriosam. Quod maiores ipsa dignissimos assumenda molestias esse quo, doloremque commodi similique?</p>

      </Section> 
      <Section
      title="Курсы"
      >
        {courses.map((link) => <Link title={link.title} href={link.url}/>)}

      </Section> 
    </main>
  )
}

export default App;
