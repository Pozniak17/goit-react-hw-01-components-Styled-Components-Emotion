import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 100px auto;
  width: 300px;
  height: 400px;
  border-radius: 12px;

  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
`;

export const Wrapper = styled.div`
  border-radius: 12px 12px 0px 0px;
  background-color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
`;

export const Image = styled.img`
  background-color: antiquewhite;
  width: 200px;
  border-radius: ${props => props.theme.radii.round};

  margin-top: ${props => props.theme.spacing(5)}; //20px
  margin-bottom: ${props => props.theme.spacing(5)}; //20px
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  margin-bottom: ${props => props.theme.spacing(2)}; //10px

  text-align: center;
`;

export const Tag = styled.p`
  color: ${props => props.theme.colors.grey};
  font-weight: ${props => props.theme.fontWeights.medium}; //500
  margin-bottom: ${props => props.theme.spacing(2)}; //10px
`;

export const Location = styled.p`
  color: ${props => props.theme.colors.grey};
  font-weight: ${props => props.theme.fontWeights.medium}; //500
  margin-bottom: ${props => props.theme.spacing(2)}; //10px
`;

export const Label = styled.span`
  color: ${props => props.theme.colors.grey};
  font-weight: ${props => props.theme.fontWeights.medium}; //500
  margin-bottom: ${props => props.theme.spacing(2)}; //
`;

export const StatsWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-content: center;
  background-color: #f3f6f9;
  border: 1px solid #d6d6d6;
  border-radius: 0px 0px 12px 12px;
`;

export const StatsItem = styled.li`
  padding: ${props => props.theme.spacing(2)}; //10px
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Quantity = styled.span`
  font-weight: ${props => props.theme.fontWeights.bold};
  text-align: center;
`;
