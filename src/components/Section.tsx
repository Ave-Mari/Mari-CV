import * as React from 'react';
//types
type Props = {
  title?: React.ReactNode
}
//import { Wrapper } from './Section.styles'


const Section = (props: Props) => {
return (
  <section>
      <h2>{props.title}</h2>
  </section>
)
}


export default Section;
