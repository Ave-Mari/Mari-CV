import * as React from 'react';
//image
import Avatar from "./../../assets/cv-pic.jpg";
//types
type Props = {
    name: string,
    position: string,
    // children?: React.ReactNode
}
//styles
import { Wrapper } from './MainSection.styles'



const MainSection: React.FC<Props> = ({name, position }) => {
  return (
    <Wrapper>
         <img src={Avatar} alt='CV Picture' className='avatar'/>
         <h1>{name}</h1>
        <h3>{position}</h3>
        {/* {children} */}
    </Wrapper>
  )
}

export default MainSection;