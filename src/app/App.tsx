import React, { useState } from 'react';
import styles from './App.module.css';
import Registration from './components/Registration/Registration';
import SplashImage from './components/SplashImage/SplashImage';
import Title from './components/Title/Title';

function App(): JSX.Element {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  console.log(selectedUser);
  return (
    <main className={styles.container}>
      <SplashImage
        url="src/app/assets/people-partying-close-up-photography-2705089.jpg"
        alt="Some people chilling on a table"
      />
      <div>
        <Title text="Bergfest" />
        <Registration onUserSelected={(userName) => alert(userName)} />
      </div>
    </main>
  );
}

export default App;
