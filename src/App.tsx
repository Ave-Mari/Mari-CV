import * as React from 'react';
//components
import MainSection from './components/MainSection/MainSection'
import Section from './components/Section/Section'
import Skill from './components/Skill/Skill'
import Link from './components/Link/Link'
import Table from './components/Table/Table'
import Footer from './components/Footer/Footer'
import SaveButton from './components/SaveButton/SaveButton';
//styles
import './main-styles.css'
//data
import skills from './skills-data'
import projects from './links-projects-data'
import courses from './links-courses-data'

const App = () => {
  
  return (
    <main>
      <SaveButton /> 
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
       <p>
        Занимаюсь фронтенд-разработкой, стремлюсь создавать сложные веб-приложения, которые могут быть полезны для пользователей и бизнеса. </p>
        <p> Нацелена на развитие имеющихся навыков, а также приобретение новых. Легко и быстро обучаюсь, умею гуглить и читать документацию на английском.
      Могу самостоятельно решить большинство возникающих вопросов, но также буду рада хорошему ментору в компании. </p>       
        <p>Ценю атмосферу дружелюбия и понимания в команде.</p>
        <p>Ранее работала в сфере продаж и другой технической сфере.</p>

      </Section> 
      <Section
      title="Курсы"
      >
        {courses.map((link) => <Link title={link.title} href={link.url}/>)}

      </Section> 
      <Footer />
    </main>
  )
}

export default App;
