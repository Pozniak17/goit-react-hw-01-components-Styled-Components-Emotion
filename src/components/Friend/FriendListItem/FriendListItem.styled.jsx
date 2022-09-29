import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;

  height: 60px;
  background-color: white;
  margin-bottom: 10px;

  align-items: center;
  border-radius: 8px;
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FriendsStatus = styled.span`
  margin-left: 15px;
  width: 12px;
  height: 12px;
  background-color: green;
  border-radius: 12px;

  background-color: ${props => setStatusColor};
`;

// функція зміни кольору
const setStatusColor = props => {
  switch (props.status) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      return '#000';
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
