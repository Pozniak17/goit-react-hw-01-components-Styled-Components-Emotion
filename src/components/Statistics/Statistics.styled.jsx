import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
  margin: 100px auto;
  width: 300px;
  height: 100%;

  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
`;

export const CardTitle = styled.h2`
  color: rgb(117, 111, 111);
  background-color: ${props => props.theme.colors.white};

  font-weight: ${props => props.theme.fontWeights.semiBold};
  text-align: center;
  padding: ${props => props.theme.spacing(4)} ${props => props.theme.spacing(4)}; //20px 20px
`;

export const CardList = styled.ul`
  display: flex;
  justify-content: space-around;
  border-radius: 15px;
`;

export const CardItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(2)}; //10px 10px

  width: 100%;
`;

export const CardSpan = styled.span`
  font-weight: ${props => props.theme.fontWeights.semiBold};
`;
