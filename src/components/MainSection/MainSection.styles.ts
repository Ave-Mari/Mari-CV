import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 46vw;
    background: #FFFFFF;
    border-radius: 17px;
    margin-bottom: 25px;
    padding: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-weight: 700;
        font-size: 4vw;
        margin-top: 0px;
        margin-bottom: 10px;
    }

    h3 {
        font-weight: 500;
        font-size: 2.3vw;
        margin: 0px;

    }

    .avatar {
        width: 240px;
    }

    @media only screen and (max-width: 1024px) {
        width: 58vw;
    }

    @media only screen and (max-width: 768px) {
        width: 64vw;  
        padding: 18px;
        .avatar {
            width: 31vw;
        }     
    }

    @media only screen and (max-width: 480px) {
        width: 84vw;

        h1 {
            font-size: 5vw;
        }

        h3 {
            font-size: 2.9vw;
        }
      }

    

    
`;