import * as React from 'react';
//types
type Props = {
    skill: string
}

const Skill = ({ skill }: Props) => {
  return (
    <div>
        {skill}
    </div>
  )
}

export default Skill;
