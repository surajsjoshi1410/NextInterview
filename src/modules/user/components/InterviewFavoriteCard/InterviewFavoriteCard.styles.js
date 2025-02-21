import styled from "styled-components";

export const InterviewFavoriteCardWrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .card {
    display: flex;
    flex-direction: column;
  }

  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 2px solid #ddd;
  }

  .card-content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card-title {
    font-family: "DM Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 8px;
  }

  .card-subtitle {
    text-overflow: ellipsis;
    font-family: "DM Sans";
    font-size: 14px;
    font-style: normal;
    color: ${({ theme }) => theme.colors.textgray};
    margin-bottom: 16px;
  }

  .topic {
    font-weight: 400;
  }
  .info {
    font-weight: 600;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .learn-btn {
    width: 96px;
    height: 34px;
    flex-shrink: 0;
    text-align: center;
    /* Body Text/Small/Body Small (Medium) */
    font-family: "DM Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #fff;
    border: none;
    border-radius: 4px;
  }
  .card-companylogo {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .learn-btn:hover {
    background-color: #0056b3;
  }

  .tags {
    display: flex;
    gap: 8px;
    font-size: 0.875rem;
  }

  .tag {
    padding: 4px 8px;
    background-color: #f1f1f1;
    border-radius: 4px;
    color: #333;
  }
  .tag-interview {
    font-family: "DM Sans";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${({ theme }) => theme.colors.textgray};
    display: flex;
    align-items: center;
    align-content: center;
  }
`;
export const InterviewFavoriteCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Three columns on larger screens
  gap: 20px;
  padding: 20px;

  // Responsive for smaller screens (1 column on mobile)
  @media (max-width: 768px) {
    grid-template-columns: 1fr; // 1 column on mobile
  }
`;
