import React from 'react';
import Profile from './components/Profile.js';
import user from './user.json';
import Statistics from './components/Statistics.js';
import data from './data.json';
import FriendList from './components/FriendList.js';
import friends from './friends.json';
import TransactionHistory from './components/TransactionHistory.js';
import transactions from './transactions.json';

function App() {
  const { username, tag, location, avatar, stats } = user;

  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;