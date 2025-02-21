import styled from "styled-components";

export const UserLearningModuleWrapper = styled.div`
  /* General Container */
  margin-left: 60px;
  .learning-module-container {
    max-width: 1200px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    padding: 40px;
  }

  /* Image and Course Details Section */
  .course-header {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    position: relative;
  }

  .course-image {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 10px;
  }

  .course-info {
    position: absolute;
    top: 75px;
    left: 10vw;
    color: white;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
  }

  .course-info-title {
    font-family: "DM Sans";
    font-size: 38px;
    font-style: normal;
    font-weight: 800;
    line-height: 42px;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 10px;
  }

  .course-details {
    font-size: 14px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    margin-bottom: 20px;
    width: 100%;
  }

  .course-actions {
    position: absolute;
    border-radius: 16px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 18px 40px 0px rgba(112, 144, 176, 0.1);
    width: 75%;
    height: 200px;
    top: 245px;
    left: 12vw;
    display: flex;
    gap: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .topics {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .topic-icon {
    display: flex;
    justify-content: center;
    padding: 4px;
    align-items: center;
    gap: 10px;
    width: 60px;
    height: 40px;
    border-radius: 10px;
    border: 0.5px solid #ffbde4;

    background: #ffeef6;
    color: #9b2053;
  }

  .duration-icon {
    display: flex;
    justify-content: center;
    padding: 4px;
    align-items: center;
    gap: 10px;
    width: 60px;
    height: 40px;
    border-radius: 10px;
    border: 0.5px solid #ffcdbd;

    background: #fff2ee;
    color: #ab5b40;
  }
  .last-updated-icon {
    display: flex;
    justify-content: center;
    padding: 4px;
    align-items: center;
    gap: 10px;
    width: 60px;
    height: 40px;
    border-radius: 10px;
    border: 0.5px solid #bfffbd;
    background: var(--Background, #f0f8f1);
    color: #68c184;
  }
  .topic-information {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .topics-title {
    font-family: "DM Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textgray};
  }
  .topics-count {
    font-family: "DM Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.black};
  }
  .course-action-btns {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  .view-sample-btn,
  .start-learning-btn {
    padding: 12px 20px;
    font-family: "DM Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .view-sample-btn {
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 20px;
  }

  .view-sample-btn:hover {
    background-color: #ddd;
  }

  .start-learning-btn {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
  }

  .start-learning-btn:hover {
    background-color: ${({ theme }) => theme.colors.info};
  }

  /* Course Overview */
  .course-overview {
    margin-top: 150px;
    margin-bottom: 30px;
  }

  .course-overview-title {
    font-family: "DM Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 10px;
  }

  .course-overview-description {
    text-overflow: ellipsis;
    font-family: "DM Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.black};
    line-height: 1.6;
  }

  /* Learning Goals */
  .learning-goals {
    margin-top: 50px;
    margin-bottom: 30px;
  }

  .learning-goals-list {
    list-style-type: none;
    padding: 0;
  }

  .learning-goals li {
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
    font-family: "DM Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.black};
    display: flex;
    align-items: center;
    margin-bottom: 28px;
  }

  .check {
    color: green;
    margin-right: 10px;
    font-size: 20px;
  }

  /* Topics Section */
  /* Course Topics Section */
  .course-topics {
    margin-bottom: 30px;
  }

  .topic {
    margin-bottom: 15px;
  }

  .topic-title {
    font-family: "DM Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.colors.black};
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  .topic-title:hover {
    background-color: #e0e0e0;
  }

  .subtopics {
    padding-left: 20px;
    margin-top: 10px;
    font-size: 16px;
    color: #555;
  }

  .subtopicicon {
    color: ${({ theme }) => theme.colors.sidebarTextColor}60;
  }

  .subtopics p {
    margin: 20px;
    text-overflow: ellipsis;
    font-family: "DM Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    gap: 10px;
    align-items: center;
    color: ${({ theme }) => theme.colors.black};
  }

  /* Action Buttons */
  .module-actions {
    display: flex;
    gap: 20px;
  }

  .schedule-interview-btn,
  .start-learning-btn {
    padding: 12px 20px;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .schedule-interview-btn {
    background-color: #f0f0f0;
    color: #333;
  }

  .schedule-interview-btn:hover {
    background-color: #ddd;
  }

  @media screen and(min-width: 900px) (max-width: 1000x) {
    .course-actions {
      width: 70%;
    }
    .topics {
      flex-direction: column;
    }
  }
  @media (max-width: 900px) {
    .course-actions {
      width: 70%;

      height: 500px;
    }
    .course-details {
      flex-direction: column;
      align-items: left;
      justify-content: left;
    }
    .course-action-btns {
      flex-direction: column;
    }

    .topics {
      justify-content: flex-start;
    }
    .course-overview {
      margin-top: 420px;
    }
  }

  @media (max-width: 800px) {
    .course-actions {
      width: 80%;
      left: 10vw;
      height: 500px;
    }
  }

  @media (max-width: 600px) {
    .course-actions {
      width: 80%;
      left: 10vw;
      height: 500px;
    }
  }
`;
