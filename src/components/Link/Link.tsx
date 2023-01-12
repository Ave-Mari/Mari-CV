import * as React from 'react';
//types
type Props = {
    title: string,
    href?: string
}                  

const Link: React.FC<Props> = ({title, href}) => {
  return (
    <a href={href}>
        {title}
    </a>
  )
}

export default Link;
