import styled from 'styled-components';

export const Wrapper = styled.table`
    th {
        width: 10%;
        text-align: left;
    }

    td {
        width: 10%;
        text-align: left;

        button {
            border: none;
            border-radious: 20px;
            background: none;
            font-family: 'Montserrat';
            font-size: 18px;
        }

        a {
            color: #000000;
        }

        a, button {
            text-decoration: underline dotted;
            curdor: pointer;
        }

        button:active {
            background: #76EDED;;
            
        }
        a:active {
            background: #76EDED;;
            
        }
    }
`;