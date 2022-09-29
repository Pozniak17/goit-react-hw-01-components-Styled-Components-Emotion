import {
  Item,
  FriendsStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

// розмітка li-шки
const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <Item id={id}>
      <FriendsStatus status={isOnline}>{isOnline}</FriendsStatus>

      <FriendAvatar src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
    </Item>
  );
};

export default FriendListItem;
