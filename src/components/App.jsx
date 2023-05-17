import { Profile } from "./profile/profile";
import user from "./profile/user.json"
import { Statistics } from './statistics/statistics';
import data from './statistics/data.json'
import { FriendList } from "./friend/friend";
import friends from "./friend/friends.json";

import { Transaction } from './transaction/transaction';
import transaction from './transaction/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList 
          friends={friends}
        />
    <Transaction transactions={transaction} />;
    </>
  );
};
