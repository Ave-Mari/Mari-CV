import * as React from 'react';
//types
type Props = {
    link: string,
    href?: string
}

const Link: React.FC<Props> = ({link, href}) => {
  return (
    <a href={href}>
        {link}
    </a>
  )
}

export default Link;
