import { useContext } from "react";
import styles from "./Navbar.module.css";
import { ChangeThemeContext } from "../contexts/ChangeThemeContext";
import { FaSun } from "react-icons/fa6";
import { IoMoonSharp } from "react-icons/io5";

const Navbar = () => {
  const themeContext = useContext(ChangeThemeContext);

  return (
    <nav className={styles.nav}>
      {themeContext?.theme === "white" ? (
        <IoMoonSharp
          id={styles.moon}
          className={styles.icon}
          onClick={() => themeContext?.changeTheme()}
        />
      ) : (
        <FaSun
          id={styles.sun}
          className={styles.icon}
          onClick={() => themeContext?.changeTheme()}
        />
      )}
    </nav>
  );
};

export default Navbar;
