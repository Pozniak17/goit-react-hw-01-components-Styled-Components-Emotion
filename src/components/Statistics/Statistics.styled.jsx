import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
  margin: 100px auto;
  width: 300px;
  height: 100%;

  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
`;

export const CardTitle = styled.h2`
  color: rgb(117, 111, 111);
  background-color: white;

  font-weight: 600;
  text-align: center;
  padding: 20px 20px;
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

  padding: 10px 10px;

  width: 100%;
`;
