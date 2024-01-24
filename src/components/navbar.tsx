import { useState } from 'react';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Logo</div>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
