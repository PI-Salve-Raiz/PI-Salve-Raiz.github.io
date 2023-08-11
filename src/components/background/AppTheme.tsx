import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { Container } from "./styles";
import { darkTheme, lightTheme } from "./background";
import Switch from "react-switch";

function AppTheme() {
    const [theme, setTheme] = useState('light')

    const themeToggler = ()=>{
        theme === "light" ? setTheme('dark') : setTheme('light')
    }
    return(
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <Container>
            <Switch
              onChange={()=>themeToggler}
              checked 
              height={20}
              width={40}
              checkedIcon={false}
              uncheckedIcon={false}
              handleDiameter={20}
              offColor="#fff"
              onColor="#232323"
            />
            </Container>
        </ThemeProvider>
    )
    
}
export default AppTheme;