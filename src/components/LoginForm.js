import React from "react";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <form className={styles.form}>
      <label htmlFor="username" className={styles.label}>
        <input type="text" name="" id="uename" className={styles.input} />
      </label>
      <label htmlFor="password" className={styles.label}>
        <input type="password" name="" id="password" className={styles.input} />
      </label>
      <button className={styles.submit}>Login</button>
    </form>
  );
};

export default LoginForm;
