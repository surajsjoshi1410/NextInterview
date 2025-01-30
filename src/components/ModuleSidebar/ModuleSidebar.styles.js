import styled from "styled-components";

export const ModuleSidebarContainer = styled.div`
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

   .progress-section {
        padding: 15px;
        text-align: center;
        margin-bottom: 20px;
    }

    .progress-section h3 {
        font-size: 14px;
        color: #ddd;
    }

    .progress-bar-container {
        width: 100%;
        height: 10px;
        background-color: #444;
        border-radius: 5px;
        margin: 10px 0;
    }

    .progress-bar {
        height: 100%;
        background-color: #4caf50;
        border-radius: 5px;
    }

    /* Course Topics Section */
.course-topics {
padding: 10px;
  margin-bottom: 30px;
}

.course-topics-title {
 text-overflow: ellipsis;
font-family: "DM Sans";
font-size: 16px;
font-style: normal;
font-weight: 600;
oerflow: hidden;
color:${({ theme }) => theme.colors.black};
  margin-bottom: 10px;
}

.topic {
  margin-bottom: 15px;
}

.topic-title {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
overflow: hidden;
color: ${({ theme }) => theme.colors.black};
text-overflow: ellipsis;
font-family: "DM Sans";
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: normal;
//   background-color: #f8f8f8;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.topic-title:hover {
  background-color: #e0e0e0;
}

.subtopics {
  padding-left: 20px;
  margin-top: 10px;
  overflow: hidden;
color: ${({ theme }) => theme.colors.black};
text-overflow: ellipsis;
font-family: "DM Sans";
font-size: 10px;
font-style: normal;
font-weight: 600;
line-height: 20px;
}

.subtopic-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
}

.subtopic-info .completed {
display: flex;

gap: 4px;
  color: green;
}

.subtopic-info .pending {
  color: orange;
}

.time {
  font-size: 14px;
  color: #777;
}

.subtopic-info span {
  margin-right: 10px;
}

.subtopic-title{
overflow: hidden;
color: ${({ theme }) => theme.colors.black};
text-overflow: ellipsis;
font-family: "DM Sans";
font-size: 10px;
font-style: normal;
font-weight: 400;
}

.module-sidebar-topic-title{
font-family: "DM Sans";
font-size: 15px;
font-style: normal;
font-weight: 500;
color:${({ theme }) => theme.colors.black};
display: flex;
align-items: left;
text-align: left;
}
.progress-details{
display: flex;
justify-content: space-between;
font-family: "DM Sans";
font-size: 12px;
font-style: normal;
font-weight: 400;
color:${({ theme }) => theme.colors.textgray};
}
.progress-details-count{
display: flex;
flex-direction: column;
align-items: center;

}
.subtopic-link{
text-decoration: none;
color: inherit;

}
.subtopic-link:visited .subtopic-title{

font-weight: 600;
color:${({ theme }) => theme.colors.black};

}
`;