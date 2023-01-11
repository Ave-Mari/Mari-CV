import * as React from 'react';
//types
type Props = {
  title?: string
}
//import { Wrapper } from './Section.styles'


const Section = ({ title }: Props) => {
return (
  <section>
      <h2>{title}</h2>
  </section>
)
}


export default Section;
