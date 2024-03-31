import { useContext } from "react";
import { ThemeContext } from "../App";
import { IoMoonOutline } from "react-icons/io5";

function Toggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="toggle">
      <label className="switch">
        <input onChange={toggleTheme} type="checkbox" checked={theme.checked} />
        <span className="slider round"></span>
      </label>
      <IoMoonOutline size={"20px"}/>
    </div>
  );
}
export default Toggle;
