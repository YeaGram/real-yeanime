import { FaLightbulb, FaSearch } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import useTheme from "../config/useTheme";
import NavItem from "../navbar/navitems";

export default function ThemeBtn() {
  const [colorTheme, setTheme] = useTheme();

  return (
    <div>
      {colorTheme === "light" ? (
        <span onClick={() => setTheme("light")}>
          <NavItem variants="fill" type="regular">
            <MdDarkMode />
          </NavItem>
        </span>
      ) : (
        <span onClick={() => setTheme("dark")}>
          <NavItem variants="fill" type="regular">
            <FaLightbulb />
          </NavItem>
        </span>
      )}
    </div>
  );
}
