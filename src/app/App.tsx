import React from 'react';
import styles from './App.module.css';
import SplashImage from './components/SplashImage/SplashImage';
import Title from './components/Title/Title';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <SplashImage
        url="src/app/assets/people-partying-close-up-photography-2705089.jpg"
        alt="Some people chilling on a table"
      />
      <div>
        <Title text="Bergfest" />
        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="First name"
          />
          <input className={styles.input} type="text" placeholder="Last name" />
          <input
            className={styles.submitButton}
            type="submit"
            value="Sign in for Partey"
            placeholder="Enter song here!"
          />
        </form>
      </div>
    </main>
  );
}

export default App;
