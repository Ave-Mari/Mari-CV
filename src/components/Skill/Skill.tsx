import * as React from 'react';
//types
type Props = {
    skill: React.ReactNode
}

const Skill = (props: Props) => {
  return (
    <div>
        {props.skill}
    </div>
  )
}

export default Skill;
