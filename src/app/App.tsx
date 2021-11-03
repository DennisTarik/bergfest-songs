import React from 'react';
import styles from './App.module.css';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <img
        className={styles.image}
        src="src/app/assets/people-partying-close-up-photography-2705089.jpg"
        alt="Some people chilling on a table"
      />
      <div>
        <h1 className={styles.title}>Bergfest Party Time </h1>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="First name"
          />
          <input
            className={styles.input}
            type="text"
            placeholder="First name"
          />
          <input
            className={styles.submitbutton}
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
