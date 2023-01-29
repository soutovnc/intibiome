import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 16px #00000014;


  .navbarMenu {
    height: 24px;
    width: 24px;
    display: flex;
    align-items: center;
    margin-left: 30px;
  }

  .searchIcon {
    height: 24px;
    width: 24px;
    display: flex;
    align-items: center;
    margin-right: 30px
  }

  .headerLogo {
    width: 143px;
    height: 58px;
    display: flex;
  }

  .headerLogo:hover {
    cursor: pointer;
  }

  .searchIcon:hover {
    cursor: pointer;
  }
`;
