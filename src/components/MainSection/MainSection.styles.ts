import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 46vw;
    background: #FFFFFF;
    border-radius: 17px;
    margin-bottom: 25px;
    padding: 30px;

    display: flex;
    justify-content: space-between;

    h1 {
        font-weight: 700;
        font-size: 2.1vw;
        margin-top: 0px;
        margin-bottom: 10px;
    }

    h2 {
        font-size: 2vw;
        font-weight: 600;
        margin-top: 0px;
        margin-bottom: 10px;
    }

    h3 {
        font-weight: 500;
        font-size: 1.2vw;
        margin: 0px;

    }

    .avatar {
        width: 240px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 18px;
    }

    .basic-info {
        display: flex;
        flex-direction: column;
    }

    @media only screen and (max-width: 1024px) {
        width: 58vw; 

        h1 {
            font-size: 3vw;
        }
        h2 {
            font-size: 2.7vw;
        }
        h3 {
            font-size: 1.8vw;
        }

        .avatar {
            margin-right: 18px;
        }
    }

    @media only screen and (max-width: 768px) {
        width: 64vw;
        padding: 18px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        h1 {
            font-size: 3.9vw;
        }

        h2 {
            font-size: 3vw;
        }

        h3 {
            font-size: 2.2vw;
        }
        .avatar {
            width: 31vw;
            margin-bottom: 33px;
            margin-right: 0;

            img {
                margin-bottom: 12px;
            }
        }     
        .basic-info {
            align-items: center;
        }
    }

    @media only screen and (max-width: 480px) {
        width: 84vw;

        h1 {
            font-size: 7.7vw;
        }
        h2 {
            font-size: 4.3vw;
        }

        h3 {
            font-size: 4.5vw;
        }

        .avatar {
            width: 64vw;
            img {
                width: 55vw;
            }
        }
      }

    

    
`;