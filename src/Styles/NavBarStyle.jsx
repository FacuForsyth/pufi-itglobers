import styled from "styled-components";

export const NavBarContainer = styled.nav`
  position: absolute;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  padding-top: 1%;
  box-shadow: inset 0% 88px 43px -20px rgb(0 0 0 / 25%);

  .title {
    display: flex;
    align-items: center;
    padding-left: 2%;
    h1 {
      font-size: 4.5rem;
      margin: 0;
      color: white;
      font-family: 'Quenda';
    }
    img {
      width: 10px;
      height: 10px;
      filter: invert(100%);
      margin: 0 0 40% 2%;
    }
  }

  .icons {
    display: flex;
    text-transform: uppercase;
    color: white;
    padding-right: 2%;
    .item {
      list-style-type: none;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 3% 5%;
      :hover {
        transform: scale(1.1);
        transition: 0.8s;
        cursor: pointer;
      }
      h2 {
        margin: 5%;
        text-align: center;
        width: max-content;
        font-weight: 500;
      }
      img {
        width: 45px;
        filter: invert(100%);
      }
    }
  }

  .user {
    color: white;
    padding-right: 3%;
    .list {
      display: flex;
      padding: 0;
      hr {
        margin: 0px 15px;
      }
      .item2 {
        list-style-type: none;
        :hover {
          opacity: 50%;
          transition: 0.5s;
          cursor: pointer;
        }
        span {
          margin-right: 7px;
          letter-spacing: .1em;
        }
        img {
          width: 10px;
          height: 10px;
          filter: invert(100%);
        }
      }
    }
  }
`