import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Registration from './components/Registration/Registration';
import SplashImage from './components/SplashImage/SplashImage';
import Title from './components/Title/Title';

function App(): JSX.Element {
  const [selectedUser, setSelectedUser] = useState<string | null>(
    localStorage.getItem('selectedUser')
  );

  useEffect(() => {
    if (selectedUser) {
      localStorage.setItem('selectedUser', selectedUser);
    } else {
      sessionStorage.removeItem('selectedUser');
    }
  }, [selectedUser]);

  useEffect(() => {
    document.title = selectedUser ? `Hi ${selectedUser}` : 'Bergfest';
  });

  return (
    <main className={styles.container}>
      <SplashImage
        url="src/app/assets/people-partying-close-up-photography-2705089.jpg"
        alt="Some people chilling on a table"
      />
      <div>
        <Title text="Bergfest" />
        <Registration onUserSelected={setSelectedUser} />
      </div>
    </main>
  );
}

export default App;
