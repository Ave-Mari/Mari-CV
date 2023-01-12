import * as React from 'react';
//types
type Props = {
    skill: string
}

const Skill: React.FC<Props> = ({skill}) => {
  return (
    <div>
        {skill}
    </div>
  )
}

export default Skill;
