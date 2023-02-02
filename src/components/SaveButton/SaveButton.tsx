import * as React from 'react';
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

        </Wrapper>
    )
}

export default SaveButton;