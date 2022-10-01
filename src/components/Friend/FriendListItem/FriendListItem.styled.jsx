import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;

  height: 60px;
  background-color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.spacing(2)};

  align-items: center;
  border-radius: 8px;
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FriendsStatus = styled.span`
  margin-left: ${props => props.theme.spacing(3)};
  width: 12px;
  height: 12px;
  background-color: ${props => props.theme.colors.green};
  border-radius: 12px;

  background-color: ${props => setStatusColor};
`;

// функція зміни кольору
const setStatusColor = ({ status, theme }) => {
  switch (status) {
    case true:
      return theme.colors.green;
    case false:
      return theme.colors.red;
    default:
      return theme.colors.black;
  }
};

export const FriendAvatar = styled.img`
  margin-left: 12px;
  width: 48px;
`;

export const FriendName = styled.p`
  margin-left: 12px;
  font-weight: 600;
`;
