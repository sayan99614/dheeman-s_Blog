import Link from "next/link";
import Logo from "./logo";
import styles from "./main.navigation.module.css";
export default function MainNavigation() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">posts</Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
