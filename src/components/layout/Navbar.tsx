import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/components/Navbar.module.scss";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className={styles.navbar}>
      <div className={styles.mobileNav}>
        <Link
          href="/"
          className={`${styles.navItem} ${
            router.pathname === "/" ? styles.active : ""
          }`}
        >
          <span className={styles.icon}>🏠</span>
          <span>Hem</span>
        </Link>

        <Link
          href="/workouts"
          className={`${styles.navItem} ${
            router.pathname === "/workouts" ? styles.active : ""
          }`}
        >
          <span className={styles.icon}>🏋️</span>
          <span>Träning</span>
        </Link>
        <Link
          href="/profile"
          className={`${styles.navItem} ${
            router.pathname === "/profile" ? styles.active : ""
          }`}
        >
          <span className={styles.icon}>👤</span>
          <span>Profil</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
