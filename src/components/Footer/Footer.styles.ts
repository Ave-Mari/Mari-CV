import styled from 'styled-components';

export const Wrapper = styled.footer`
    width: 79px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 2.5vw;
    }

    p {
        padding: 0;
    }

    @media only screen and (max-width: 1024px) {
        img {
            width: 3vw;
        }
    
        width: 82px;
      } 
    @media only screen and (max-width: 768px) {
        img {
            width: 33px;
        }
    
        width: 77px;
      } 

      @media only screen and (max-width: 480px) {
        img {
            width: 34px;
        }
    
        width: 82px;
      }
`;