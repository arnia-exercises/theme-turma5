import { useTheme } from "../../contexts/theme-context";
import { HeaderStyle } from "./styled";
import { FaToggleOn, FaToggleOff } from "react-icons/fa"

export default function Header () {
  const { theme, toggleTheme } = useTheme()

  return (
    <HeaderStyle>
      <div />

      <div>LOGO</div>

      <div>
        {theme
          ? <FaToggleOn onClick={toggleTheme} />
          : <FaToggleOff onClick={toggleTheme} />
        }
      </div>
      
    </HeaderStyle>
  )
}