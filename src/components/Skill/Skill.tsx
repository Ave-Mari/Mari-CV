import * as React from 'react';
//types
type Props = {
    skill: string
}
//style
import { Element } from './Skill.styles'

const Skill: React.FC<Props> = ({skill}) => {
  return (
    <Element>
        {skill}
    </Element>
  )
}

export default Skill;
