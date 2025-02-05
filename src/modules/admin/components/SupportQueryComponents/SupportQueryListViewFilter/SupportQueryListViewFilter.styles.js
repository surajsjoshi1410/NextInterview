import styled from "styled-components";

export const FilterContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
`;
export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const FilterSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const FilterTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterOption = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textgray};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
`;

export const Checkbox = styled.input`
  margin-right: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
`;

export const Radio = styled.input`
  margin-right: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

export const ClearButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.bluetext};
  border: none;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ApplyButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
