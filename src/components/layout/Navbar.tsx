import Link from "next/link";
import styles from "@/styles/components/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Gym App
      </Link>
      <div className={styles.links}>
        <Link href="/workouts">Träningspass</Link>
        <Link href="/profile">Profil</Link>
      </div>
    </nav>
  );
};

export default Navbar;
