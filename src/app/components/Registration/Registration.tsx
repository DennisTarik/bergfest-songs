import React, { useState } from 'react';
import styles from './Registration.module.css';

function Registration(): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  console.log(firstName);
  console.log(lastName);

  return (
    <form className={styles.form}>
      <input
        className={styles.firstName}
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        className={styles.lastName}
        type="text"
        placeholder="Last name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <input
        className={styles.submit}
        type="submit"
        value="Sign in for Partey"
      />
    </form>
  );
}

export default Registration;
