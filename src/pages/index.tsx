import { useState } from "react";
import styles from "@/styles/components/Home.module.scss";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Logging in with:", email, password);
  };

  return (
    <div className={styles.container}>
      <h1>Welcome to the Gym App!</h1>

      <form className={styles.loginForm} onSubmit={handleLogin}>
        <div className={styles.inputGroup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className={styles.loginButton} type="submit">
          Log in
        </button>

        <div className={styles.links}>
          <a href="#">Forgot password?</a>
          <a href="#">Create account</a>
        </div>
      </form>
    </div>
  );
}
