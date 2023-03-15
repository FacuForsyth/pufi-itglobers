import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  
  .container {
    display: flex;
    margin-top: 7%;
    box-shadow: 5px -8px 28px 1px rgb(0 0 0 / 10%);
    padding: 3% 2%;

    .title {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      width: 20%;
      .logo {
      margin: 0;
      width: 80px;
      height: 80px;
      }
      .copyright {
        width: 10px;
        height: 10px;
        margin: 8% 0 0 0;
      }
    }
    
    .listFooter {
      list-style-type: none;
      width: 20%;
      display: flex;
      flex-direction: column;
      text-transform: uppercase;
      font-weight: 600;
      margin: 0;
      border-right: grey solid 1px;
      padding: 0 0 0 5%;
      li {
        margin-bottom: 3%;
        :hover {
          opacity: 50%;
          transition: 0.5s;
          cursor: pointer;
        }
      }
    }

    .safeGuard {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-transform: uppercase;
      font-weight: 600;
      width: 20%;
      border-right: grey solid 1px;
      padding-left: 5%;

      .assurance {
        display: flex;
        align-items: center;

        .imgDataFiscal {
          width: 2.5rem;
        }

        .imgShield {
          width: 4.2rem;
          height: 4.2rem;
          margin-top: 3%;
        }

        span {
          font-style: italic;
          font-weight: 400;
          width: 40%;
        }
      }
    }

    .socialMedia {
      font-weight: 600;
      display: flex;
      flex-direction: row;
      width: 20%;
      padding-left: 5%;
      text-transform: uppercase;
      img {
        width: 1.5rem;
        height: 1.5rem;
        margin-left: 3%;
        margin-top: -0.5%;
        :hover {
          opacity: 50%;
          transform: scale(1.2);
          transition: 0.5s;
          cursor: pointer;
        }
      }
    }
  }

  hr {
    color: grey;
    width: 96%;
  }

  .container2 {
    display: flex;
    justify-content: space-between;
    padding: 0.5% 0 1%;
    span {
      margin-left: 2%;
    }
    img {
      margin-right: 2%;
      width: 8rem;
      height: 1.5rem;
    }
  }
`