import styled from'styled-components';

export const Wrapper = styled.button`
    width: 42px;
    height: 42px;
    border: none;
    border-radius: 50%;
    background: #1082e6;
    position: fixed;
    right: 2%;
    cursor: pointer;

    &:hover {
        background: #096ac0;
    }

    img {
        width: 24px;
    }

    @media only screen and (max-width: 480px) { 
        width: 52px;
        height: 52px;

        img {
            width: 29px;
        }
    
    }
`;