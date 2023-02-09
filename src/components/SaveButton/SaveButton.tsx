import * as React from 'react';
import Save from './../../assets/save-button.svg';
//styles
import { Wrapper } from './SaveButton.styles'



const SaveButton: React.FC= () => {

    return (
        <Wrapper>
            <a href="https://drive.google.com/file/d/1Z22dNQgYbP7IeZR9B50ynE1-9RRqiebQ/view"
            target="_blank"
            >
            <img src={Save} alt='save'></img>
            </a>
        </Wrapper>
    )
}

export default SaveButton;