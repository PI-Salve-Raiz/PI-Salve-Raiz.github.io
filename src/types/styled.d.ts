import "styled-components";

declare module " Styled-components" {
    export interface DefaultTheme{
        name: string;
        colors: {
            primary: string;
            secondary: string;
            lightGray: string;
            backgroundColor: string;
            textColor: string;
        }
    }
}