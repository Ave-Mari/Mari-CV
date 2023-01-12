import * as React from 'react';
//types
type Props = {
    title: string,
    href?: string
}      
//style
import { Element } from './Link.styles';

const Link: React.FC<Props> = ({title, href}) => {
  return (
    <Element href={href}>
        {title}
    </Element>
  )
}

export default Link;
