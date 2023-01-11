import * as React from 'react';
//types
type Props = {
    link: string
}

const Link = ({ link }: Props) => {
  return (
    <div>
        {link}
    </div>
  )
}

export default Link;
