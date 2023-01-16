import * as React from 'react';
//styles
import { Wrapper } from './Table.styles'

const Table: React.FC = () => {
  return (
    <Wrapper>
    <tr>
      <td>E-mail:</td>
      <td>avemari98@gmail.com</td>
    </tr>
    <tr>
      <td>Telegram:</td>
      <td>@marifog</td>
    </tr>
    <tr>
      <td>Github:</td>
      <td>https://github.com/Ave-Mari</td>
    </tr>
  </Wrapper>
  )
}


export default Table;
