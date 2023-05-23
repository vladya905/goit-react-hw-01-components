import { Profile } from "./profile/profile";
import user from "../data/user.json"
import { Statistics } from './statistics/statistics';
import data from '../data/data.json'
import { FriendList } from "./friend/friend";
import friends from "../data/friends.json";
import { Transaction } from './transaction/transaction';
import transaction from '../data/transactions.json';

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
