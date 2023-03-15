import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  .imgContainer {
    width: 50%;
    height: 80hv;
    clip-path: ${({ position }) => (position === "left" ? "polygon(100% 0, 100% 48%, 98% 50%, 100% 52%, 100% 100%, 0 100%, 0 0)" : "polygon(0 48%, 0 0, 100% 0, 100% 100%, 0 100%, 0 52%, 2% 50%)")};
    order: ${({ position }) => (position === "left" ? 0 : 1)};
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
      opacity: 80%;
      button {
        display: block;
      }
    }
    button {
      position: absolute;
      display: none;
      color: white;
      background: none;
      text-transform: uppercase;
      letter-spacing: .2em;
      transform: scale(3);
      border: white solid 1px;
      font-size: 0.4rem;
      padding: 0.5% 1%;
      :hover {
        transition: 1s;
        background: white;
        color: black;
        cursor: pointer;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }

  .detail {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    .subDetail {
      width: 60%;
      height: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      font-family: 'Segoe UI';
      img {
        width: 26%;
        height: 32%;
      }
      h3 {
        font-size: 2.3rem;
        font-weight: 400;
      }
      hr {
        color: grey;
        width: 8%;
      }
      p {
        width: 45%;
        text-align: center;
        font-weight: 500;
      }
      button {
        border: none;
        background-color: white;
        font-size: 1rem;
        letter-spacing: .2em;
        text-transform: uppercase;
        margin-top: 4%;
        :hover {
          transform: scale(1.1);
          transition: 0.5s;
          cursor: pointer;
        }
      }
    }
  }
`