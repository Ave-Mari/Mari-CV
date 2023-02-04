import * as React from 'react';
import Save from './../../assets/save-button.svg';
//styles
import { Wrapper } from './SaveButton.styles'



const SaveButton: React.FC= () => {

    const saveHandler = () => {
        fetch('CV_Frontend-developer(MariVaypan).pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'CV_Frontend-developer(MariVaypan).pdf';
                alink.click();
            })
        })
    }
    return (
        <Wrapper onClick={saveHandler}>
            <img src={Save} alt='save'></img>
        </Wrapper>
    )
}

export default SaveButton;