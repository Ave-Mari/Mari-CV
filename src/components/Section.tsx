import * as React from 'react';
//types
type Props = {
  title?: string,
  children: React.ReactNode
}
//import { Wrapper } from './Section.styles'


const Section: React.FC<Props> = ({ title, children }) => {
return (
  <section>
      <h2>{title}</h2>
      {children}
  </section>
)
}

export default Section;
