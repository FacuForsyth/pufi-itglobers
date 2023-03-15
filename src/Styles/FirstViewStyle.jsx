import styled from "styled-components"

export const FirstViewContainer = styled.div`
  .carousel {
    height: 100vh;
  
    .react-multi-carousel-track{
      height: 100%;
    }

   .react-multi-carousel-dot-list{
      margin-bottom: 1.5%;
      transform: scale(1.5);
    }

    .item{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
      }

      .text {
        font-size: xx-large;
        width: 38%;
        text-align: center;
        position: absolute;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        & h1 {
          font-family: 'Segoe UI';
          text-transform: uppercase;
          color: white;
          line-height: 100%;
          text-shadow: 2px 2px rgb(144 144 144);
          font-weight: 400;
        }
        & button {
          text-transform: uppercase;
          letter-spacing: .2em;
          color: white;
          background: none;
          transform: scale(3);
          border: white solid 1px;
          font-size: 0.4rem;
          padding: 1% 2.5%;
          :hover {
            transition: 1s;
            background: white;
            opacity: 80%;
            color: black;
            cursor: pointer;
          }
        }
      }
    }
  }
`;