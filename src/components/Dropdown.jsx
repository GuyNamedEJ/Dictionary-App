import { ThemeContext } from "../App";
import { useContext } from "react";
function Dropdown() {

    const {selectFont, theme} = useContext(ThemeContext)
  return (
    <div className="custom-select">
      <select defaultValue={theme.font} className={`text-${theme.font}`} onChange={selectFont} id="fonts" name="font">
        <option  className="text-sans-serif" value="sans-serif">Sans Serif</option>
        <option  className="text-serif" value="serif">Serif</option>
        <option  className="text-mono" value="mono">Mono</option>
      </select>
    </div>
  );
}
export default Dropdown;
