import styled from 'styled-components';

export const TableContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.lightgreen};
  font-family: ${({ theme }) => theme.fonts.body};
  margin-left: 60px;
  margin-Top: 20px;
  border-radius: 8px;
  `;

export const SearchBar = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.colors.borderblue};
  border-radius: 4px;
  font-size: 1rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Th = styled.th`
  text-align: left;
  padding: ${({ theme }) => theme.spacing(1)};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.lightblue};
  }
`;

export const Td = styled.td`
  padding: ${({ theme }) => theme.spacing(1)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderblue};
  text-align: left;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
`;

export const UserCell = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.lightbrown};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.black};
  margin-right: ${({ theme }) => theme.spacing(1)};
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const Email = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textgray};
`;

export const ActiveHours = styled.div`
  color: ${({ theme, color }) => theme.colors[color]};
  font-weight: bold;
`;
