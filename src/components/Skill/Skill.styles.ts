import styled from 'styled-components';

export const Element = styled.div`
        padding: 5px 15px;
        font-size: 1vw;
        background: #7C3AD2;
        border-radius: 20px;
        display: inline-block;
        color: #fff;
        margin-right: 3px;
        margin-bottom: 5px;

        -webkit-touch-callout: none; 
        -webkit-user-select: none; 
         -khtml-user-select: none; 
           -moz-user-select: none; 
            -ms-user-select: none; 
                user-select: none;


        @media only screen and (max-width: 1024px) {
          font-size: 1.4vw;
        } 
        @media only screen and (max-width: 768px) {
          font-size: 1.6vw;
        } 

        @media only screen and (max-width: 480px) {
          font-size: 2.4vw;
        }

`