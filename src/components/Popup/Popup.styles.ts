import styled from 'styled-components';
import 'animate.css';

export const Wrapper = styled.div.attrs({
    className: 'animate__backInDown animate__backOutUp'
})`
    position: fixed;
    top: 18px;
    background: #00E1D3;
    color: #fff;
    padding: 6px 22px;
    text-align: center;
    left: 39%;
    right: 39%;
`;