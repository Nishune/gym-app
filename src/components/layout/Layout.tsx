import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "@/styles/components/Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
