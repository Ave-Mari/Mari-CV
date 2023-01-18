import * as React from 'react';
//image
import Github from './../../assets/github.svg';
//styles
import { Wrapper } from './Footer.styles'

export default function Footer() {
  return (
    <Wrapper>
        <a href='https://github.com/Ave-Mari/Mari-CV' target="_blank">
    <img src={Github} alt={'link to github'}></img>
    </a>   
    <p>2023</p> 
    </Wrapper>
  )
}
