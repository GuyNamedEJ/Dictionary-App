import Toggle from "./Toggle";
import Dropdown from "./Dropdown";
import { RiBook2Line } from "react-icons/ri";

function Header() {
  return (
    <header>
      <RiBook2Line size={"32px"}/>

      <div className="inputs">
        <Dropdown />
        <hr />
        <Toggle />
      </div>
    </header>
  );
}
export default Header;
