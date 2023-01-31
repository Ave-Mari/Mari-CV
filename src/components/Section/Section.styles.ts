import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 46vw;
    background: #FFFFFF;
    border-radius: 17px;
    margin-bottom: 25px;
    padding: 30px;

    h2 {
        font-weight: 600;
        font-size: 2.4vw;
        margin-top: 0px;
    }    

    p {
        margin: 0;
        font-size: 1.3vw;
    }

    @media only screen and (max-width: 1024px) {
        width: 58vw;
        
        p {
            font-size: 1.5vw;
        }
       
    }

    @media only screen and (max-width: 768px) {
        width: 64vw;
        padding: 18px;

        p {
            font-size: 1.7vw;
        }
    }

    @media only screen and (max-width: 480px) {
        width: 84vw;
        margin-bottom: 16px;

        h2 {
            font-size: 3.8vw;
        }

        p {
            font-size: 2.5vw;
        }

    }

       

`