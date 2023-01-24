import styled from 'styled-components';
import 'animate.css';

export const Wrapper = styled.div.attrs({
    className: 'animate__backInDown animate__backOutUp'
})`
    position: fixed;
    width: 37vw;
    top: 18px;
    background: #00E1D3;
    color: #fff;
    font-size: 2vw;
    padding: 6px 22px;
    text-align: center;
`;