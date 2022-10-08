// JSON файли
import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transaction from '../json/transactions.json';

import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './Friend/FriendList';
import TransactionHistory from './TransactionHistory';
import { Box } from './Box/Box';

export const App = () => {
  return (
    <Box bg="mainBgColor">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </Box>
  );
};
