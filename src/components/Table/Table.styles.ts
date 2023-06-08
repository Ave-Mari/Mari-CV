import styled from 'styled-components';

export const Wrapper = styled.table`
    th {
        width: 10%;
        text-align: left;
        font-size: 1.2vw;

        -webkit-touch-callout: none; 
        -webkit-user-select: none; 
         -khtml-user-select: none; 
           -moz-user-select: none; 
            -ms-user-select: none; 
                user-select: none;
    }

    td {
        width: 10%;
        text-align: left;
        font-size: 1.9vw;
        padding-bottom: 8px;
        font-size: 1.4vw;
        
        button {
            font-size: 1.4vw;
            border: none;
            border-radious: 20px;
            background: none;
            font-family: 'Montserrat';            
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


    @media only screen and (max-width: 1024px) {
        th {
            font-size: 2vw;
        }

        td {
            button {
                font-size: 1.9vw;
            }

            a {
                font-size: 1.9vw;
            }
        }
    }

    @media only screen and (max-width: 768px) {
        th {
            text-align: center;
            font-size: 2.4vw;
        }

        td {
            text-align: center;
            font-size: 2.3vw;
            button {
                font-size: 2.3vw;
            }

            a {
                font-size: 2.3vw;
            }
        }
    }

    @media only screen and (max-width: 480px) {
        th {
            font-size: 4.5vw;
        }

        td {
            font-size: 4vw;
            button {
                font-size: 4vw;
            }

            a {
                font-size: 4vw;
            }
        }
    }
    
    @media only screen and (max-width: 380px) {
        th {
            font-size: 3vw;
        }

        td {
            font-size: 2.9vw;
            button {
                font-size: 2.9vw;
            }

            a {
                font-size: 2.9vw;
            }
        }
    }

   
`;