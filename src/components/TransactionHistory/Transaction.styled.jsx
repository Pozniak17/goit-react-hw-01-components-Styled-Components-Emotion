import styled from '@emotion/styled';

export const TableHistory = styled.table`
  background-color: ${props => props.theme.colors.white};
  margin: 100px auto;
  width: 400px;
  height: 100%;

  align-items: center;

  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.3);
`;

export const TableHead = styled.thead`
  background-color: #00bcd5;
`;

export const TableTitle = styled.th`
  color: ${props => props.theme.colors.white};
  padding: 10px;
`;

export const TableData = styled.td`
  padding: 10px 10px 20px 40px;

  :first-of-type {
    text-transform: capitalize;
  }
`;

export const TableRow = styled.tr`
  :nth-of-type(even) {
    background-color: #ecf1f3;
  }
`;
