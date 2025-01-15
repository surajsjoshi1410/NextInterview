import styled from "styled-components";
export const SideBarwrapper = styled.div`
  background-color: ${(props) => props.theme.colors.sidebarBgColor};
  width: ${(props) => (props.isExpanded ? "200px" : "60px")};
  height: 100vh;
  transition: width 0.3s ease;
  position: fixed;
  display: flex;
  flex-direction: column;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${(props) => (props.isExpanded ? "20px" : "10px")};

    img {
      width: ${(props) => (props.isExpanded ? "80%" : "50%")};
      transition: width 0.3s ease;
    }
  }

  .menu-list {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    list-style: none;
    align-items: ${(props) => (props.isExpanded ? "flex-start" : "center")};
  }

  .menu-item {
    width: 100%;
  }

  .menu-link {
    display: flex;
    align-items: center;
    padding: ${(props) => (props.isExpanded ? "10px 15px" : "10px")};
    color: ${(props) => props.theme.colors.sidebarTextColor || "grey"};
    text-decoration: none;
    transition: padding 0.3s ease, background-color 0.3s ease;

    &:hover {
      background-color: ${(props) =>
        props.theme.colors.sidebarHoverBgColor || "#e0e0e0"};
    }

    &.active {
      color: ${(props) => props.theme.colors.primary};
      background-color: ${(props) =>
        props.theme.colors.sidebarActiveBgColor || "#f0f0f0"};
      font-weight: bold;
    }

    .menu-link-icon {
      margin-right: ${(props) => (props.isExpanded ? "10px" : "0")};
      font-size: 20px;
      transition: margin 0.3s ease;
    }

    .menu-link-text {
      display: ${(props) => (props.isExpanded ? "inline-block" : "none")};
      font-size: 14px;
      transition: opacity 0.3s ease;
    }
  }
`;

export const ContentWrapper = styled.div`
  margin-left: ${(props) => (props.isExpanded ? "200px" : "60px")};
  padding: 20px;
  width: calc(100% - ${(props) => (props.isExpanded ? "200px" : "60px")});
  transition: margin-left 0.3s ease, width 0.3s ease;
`;
