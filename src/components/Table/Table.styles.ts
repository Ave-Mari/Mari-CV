import styled from 'styled-components';

export const Wrapper = styled.table`
    th {
        width: 10%;
        text-align: left;
        font-size: 1.2vw;
    }

    td {
        width: 10%;
        text-align: left;
        
        button {
            border: none;
            border-radious: 20px;
            background: none;
            font-family: 'Montserrat';
            font-size: 1.4vw;
            padding: 0;
        }

        a {
            color: #000000;
            font-size: 1.4vw;
        }

        a, button {
            text-decoration: underline dotted;
            cursor: pointer;
        }

        button:active {
            background: #76EDED;
            
        }
        a:active {
            background: #76EDED;
            
        }
        button:hover {
            background: #AFFFF7;
            
        }
        a:hover {
            background: #AFFFF7;
            
        }
    }

    @media only screen and (max-width: 768px) {
        th {
            font-size: 1.5vw;
        }

        td {
            button {
                font-size: 1.8vw;
            }

            a {
                font-size: 1.8vw;
            }
        }
    }

    @media only screen and (max-width: 480px) {
        th {
            font-size: 2.2vw;
        }

        td {
            button {
                font-size: 2.1vw;
            }

            a {
                font-size: 2.1vw;
            }
        }
    }
    
    @media only screen and (max-width: 1024px) {
        th {
            font-size: 2.9vw;
        }

        td {
            button {
                font-size: 2.7vw;
            }

            a {
                font-size: 2.7vw;
            }
        }
    }

   
`;