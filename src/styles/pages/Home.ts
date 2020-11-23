import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  padding: 2vh 0;
  justify-content: flex-end;

  a {
    text-decoration: none;
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    color: #4f4f4f;
  }
`;

export const Hero = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 60%;
  margin: 0 auto;

  h1 {
    padding-left: 15%;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 120%;
    color: #000000;
    position: relative;
    margin-bottom: 12vh;

    &::before {
      content: '';
      position: absolute;
      width: 8px;
      height: 100%;
      background: #f7df94;
      left: 0;
    }
  }
  a {
    display: flex;
    cursor: pointer;
    margin: 0 5%;
    text-decoration: none;
    padding: 4vh 2vh;
    transition: all 0.4s ease-in-out;

    &:hover {
      background-color: #333333;

      div {
        h2 {
          color: #f2f2f2;
        }
        strong {
          color: #828282;
        }
      }
    }

    div {
      h2 {
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        color: #4f4f4f;
      }
      strong {
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #828282;
      }
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 2vh;

  h3 {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #a9a9a9;
  }
`;
