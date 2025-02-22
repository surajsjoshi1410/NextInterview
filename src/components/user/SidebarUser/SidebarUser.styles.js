import styled from "styled-components";
export const SideBarwrapper = styled.div`
  background-color: ${(props) => props.theme.colors.sidebarBgColor};
  width: 250px;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;

  .menu-link .menu-link-icon .sidebarIcon {
    filter: grayscale(100%) brightness(0.5);
  }

  .menu-link.active .menu-link-icon .sidebarIcon {
    filter: brightness(0) saturate(100%) invert(23%) sepia(87%) saturate(322%)
      hue-rotate(120deg) brightness(95%) contrast(93%);
  }

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

  .mock-card {
    background: linear-gradient(to bottom, #2290ac, #68c184);
    border-radius: 16px;
    padding: 10px;
    text-align: center;
    width: 200px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 65%;
    color: white;
    font-family: Arial, sans-serif;
    display: grid;
    align-items: center;
    justify-content: center;
    left: 10px;
  }

  /* Icon container */
  .mock-card-icon {
    background: linear-gradient(to bottom, #2290ac, #68c184);
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: -40px auto 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border: 5px solid white;
    font-size: 40px;
  }

  .mock-card-icon img {
    width: 40px;
    height: 40px;
  }

  /* Title */
  .mock-card-title {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
  }

  /* Description */
  .mock-card-description {
    font-size: 14px;
    margin: 10px 0;
    color: rgba(255, 255, 255, 0.9);
  }

  /* Button */
  .mock-card-button {
    background: white;
    color: #68c184;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 15px;
    transition: background 0.3s ease;
  }

  .mock-card-button:hover {
    background: #ccc;
  }
`;

export const ContentWrapper = styled.div`
  margin-left: 50px;
  padding: 20px;
  width: calc(100% - 200px);
  transition: margin-left 0.3s ease, width 0.3s ease;
`;
