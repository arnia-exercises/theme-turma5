import { ReactNode, createContext, useContext, useState } from "react";
import { ThemeProvider as Theme } from 'styled-components'
import { themeLight } from "../assets/styles/light";
import { themeDark } from "../assets/styles/dark";


type ThemeContextProps = {
  theme: boolean
  toggleTheme: () => void
}
const ThemeContext = createContext<ThemeContextProps>({
  theme: true,
  toggleTheme: () => {}
})

type ThemeProviderProps = {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(true)
  
  const toggleTheme = () => {
    setTheme(!theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Theme theme={theme ? themeDark : themeLight}>
        {children}
      </Theme>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}
