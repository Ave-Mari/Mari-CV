import styled from 'styled-components';

export const Element = styled.a`
    background: #00B3A8;
    border-radius: 20px;
    text-decoration: none;
    color: white;
    padding: 7px 24px;
    display: inline-block;
    margin-right: 8px;
    margin-bottom: 4px;
    font-size: 1.2vw;

    &:hover {
        background: #03857D;
    }
    
    @media only screen and (max-width: 1024px) {
        font-size: 1.6vw;

        &:hover {
            background: none;
        }

        &:active {
            background: #03857D;
        }
    }

    @media only screen and (max-width: 768px) {
        font-size: 1.9vw;
      }
    @media only screen and (max-width: 480px) {
        font-size: 2.8vw;
        padding: 5px 22px;
      }

`