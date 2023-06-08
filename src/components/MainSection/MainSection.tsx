import * as React from 'react';
//components
import Table from './../Table/Table'
//image
import Avatar from "./../../assets/cv-pic.jpg";
//types
type Props = {
    name: string,
    position: string,
    title: string
}
//styles
import { Wrapper } from './MainSection.styles'




const MainSection: React.FC<Props> = ({name, position, title }) => {
  return (
    <Wrapper>
      <div className="avatar"><img src={Avatar} alt='CV Picture' className='avatar'/>
         <h1>{name}</h1>
        <h3>{position}</h3>
        </div>
        <div className="basic-info">
          <h2>{title}</h2>
          <Table />
        </div>
         
    </Wrapper>
  )
}

export default MainSection;