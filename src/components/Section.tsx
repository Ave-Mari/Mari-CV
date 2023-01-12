import * as React from 'react';
//types
type Props = {
  title?: string,
  children: React.ReactNode
}
//styles
import { Wrapper } from './Section.styles'


const Section: React.FC<Props> = ({ title, children }) => {
return (
  <Wrapper>
      <h2>{title}</h2>
      {children}
  </Wrapper>
)
}

export default Section;
