import * as React from 'react';
//types
type Props = {
    link: React.ReactNode,
    href?: string
}

const Link = (props: Props) => {
  return (
    <a href={props.href}>
        {props.link}
    </a>
  )
}

export default Link;
