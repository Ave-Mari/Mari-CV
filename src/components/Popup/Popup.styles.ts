import styled from 'styled-components';

export const Wrapper = styled.div`

    position: fixed;
    top: 18px;
    background: #00E1D3;
    color: #fff;
    font-size: 17px;
    padding: 6px 22px;
    text-align: center;
    right: 35%;
    left: 35%;

    @media only screen and (max-width: 768px) {
        font-size: 2.4vw;
        right: 25%;
        left: 25%;
    }
    @media only screen and (max-width: 480px) {
        font-size: 2.9vw;
        right: 19%;
        left: 19%;
    }
`;