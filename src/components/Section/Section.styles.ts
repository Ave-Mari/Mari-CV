import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 46vw;
    background: #FFFFFF;
    border-radius: 17px;
    margin-bottom: 25px;
    padding: 30px;

    h2 {
        font-weight: 600;
        font-size: 2vw;
        margin-top: 0px;
        margin-bottom: 7px;
    }    

    p {
        margin: 0;
        font-size: 1.3vw;
        text-indent: 3%
    }

    @media only screen and (max-width: 1024px) {
        width: 58vw;

        h2 {
            font-size: 2.7vw;
        }
        
        p {
            font-size: 1.5vw;
        }
       
    }

    @media only screen and (max-width: 768px) {
        width: 64vw;
        padding: 18px;

        h2 {
            font-size: 3vw;
        }

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