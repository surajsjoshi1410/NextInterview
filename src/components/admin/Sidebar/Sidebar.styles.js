import styled from "styled-components";
export const SideBarwrapper = styled.div`
  background-color: ${(props) => props.theme.colors.sidebarBgColor};
  width: 250px;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    img {
      width: 80%;
    }
  }

  .menu-list {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    list-style: none;
    align-items: flex-start;
    gap: 10px;
    border: none;
  }

  .menu-item {
    width: 100%;
  }

  .menu-link {
    display: grid;
    grid-template-columns: 1fr 4fr;
    align-items: center;
    padding: 0 10px 0 10px;
    color: ${(props) => props.theme.colors.sidebarTextColor || "grey"};
    text-decoration: none;
    margin: 0 15px 0 15px;
    height: 35px;
    border: none;

    &:hover {
      background-color: ${(props) =>
        props.theme.colors.sidebarHoverBgColor || "#e0e0e0"};
    }

    .menu-link-icon .svgicon {
      filter: invert(9%) sepia(5%) saturate(800%) hue-rotate(180deg)
        brightness(0%) contrast(0%);
    }

    &.active {
      color: white;
      background-color: #2290ac;
      font-weight: bold;
      border: none;
      outline: none;
      border-radius: 5px;

      .menu-link-icon .svgicon {
        filter: invert(87%) sepia(60%) saturate(1129%) hue-rotate(85deg)
          brightness(96%) contrast(100%);
      }
    }

    .menu-link-icon {
      margin-right: 10px;
      font-size: 20px;
    }

    .menu-link-text {
      display: inline-block;
      font-size: 14px;
    }
  }
`;

export const ContentWrapper = styled.div`
  margin-left: 50px;
  padding: 20px;
  width: calc(100% - 200px);
  transition: margin-left 0.3s ease, width 0.3s ease;
`;
