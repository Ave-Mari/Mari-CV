import * as React from 'react';
//styles
import { Wrapper } from './Table.styles'

const Table: React.FC = () => {
  return (
    <Wrapper>
    <tr> 
      <th scope='row'>E-mail:</th>
      <td>avemari98@gmail.com</td>
    </tr>
    <tr>
    <th scope='row'>Telegram:</th>
      <td>@marifog</td>
    </tr>
    <tr>
    <th scope='row'>Github:</th>
      <td>https://github.com/Ave-Mari</td>
    </tr>
  </Wrapper>
  )
}


export default Table;
