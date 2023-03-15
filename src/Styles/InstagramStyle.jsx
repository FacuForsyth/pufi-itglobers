import styled from "styled-components";

export const InstagramContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    margin: 5% 0 0 0;
    color: grey;
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;
  }
  h2 {
    margin: 0 0 3% 0;
    font-size: 3rem;
    font-weight: 400;
    text-transform: uppercase;
  }

  .imgInstagram {
    display: flex;
    flex-wrap: wrap;
    width: 45%;

    .item {
      list-style-type: none;
      width: 32%;
      height: 50%;
      margin-left: 0.5%;
      :hover {
        opacity: 50%;
        transition: 0.5s;
        cursor: pointer;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`