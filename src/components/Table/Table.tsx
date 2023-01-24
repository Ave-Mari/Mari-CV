import * as React from 'react';
import { useState } from 'react';
import Popup from './../Popup/Popup'
//styles
import { Wrapper } from './Table.styles';
//types
type clickToCopy = (...args: any) => void;


const Table: React.FC = () => {
  type Show = boolean;
  const [showPopup, setShowPopup] = useState<Show>(false);

  const clickToCopy: clickToCopy = (e) => {
    navigator.clipboard.writeText(e.target.value);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };
  
  return (
    <Wrapper>
      {showPopup ?  <Popup /> : null}     
    <tr> 
      <th scope='row'>E-mail:</th>
      <td>
        <button value="avemari98@gmail.com" onClick={e => clickToCopy(e)}>avemari98@gmail.com</button>
      </td>
    </tr>
    <tr>
    <th scope='row'>Telegram:</th>
      <td>
      <button value="@marifog" onClick={e => clickToCopy(e)}>@marifog</button>
      </td>
    </tr>
    <tr>
    <th scope='row'>Github:</th>
      <td>
        <a href='https://github.com/Ave-Mari' target="_blank">Ave-Mari</a>
        
        </td>
    </tr>
  </Wrapper>
  )
}


export default Table;
