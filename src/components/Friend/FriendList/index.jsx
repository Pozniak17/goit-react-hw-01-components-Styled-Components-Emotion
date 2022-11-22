// import style from './style.module.css';
import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';

import FriendListItem from '../FriendListItem';
// import { List } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <Box margin="100px auto" width="220px">
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </Box>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ),
};
