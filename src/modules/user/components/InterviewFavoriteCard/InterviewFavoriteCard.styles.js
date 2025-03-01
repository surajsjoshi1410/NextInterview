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
    position: relative;
    height: 40vh;
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
    margin: 0;
  }

    .card-overlay{
    position: relative;
 
  }
  .overlay{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    float: right;
  }
 
  .overlay-text{
    position: absolute;
    top: 15px;
    right: 15px;
    font-family: "DM Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.bluetext};
    background-color:${({ theme }) => theme.colors.white};
    padding: 5px 10px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.bluetext};
    float: right;
  }
 
  .card-subtitle {
    text-overflow: ellipsis;
    font-family: "DM Sans";
    font-size: 14px;
    font-style: normal;
    color: ${({ theme }) => theme.colors.textgray};
    margin-bottom: 16px;
    margin: 0;
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
    position: absolute;
    bottom: 10px;
    gap: 10px;
    width: 100%;
  }

  .learn-btn {
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
    paddimg: 10px 20px;
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
    align-items: center;
  justify-content: flex-end;
  }
 
 
  span {
    font-size: 14px;
    color: #777;
    padding-right: 30px;
  }
 
  .icon {
    width: 24px;
    height: 24px;
    margin: 0;
    position: relative;
    border-radius: 50%;
    border: 3px solid #fff;
    top: 10px;
 
    &:first-child {
      left: 0;
    }
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
