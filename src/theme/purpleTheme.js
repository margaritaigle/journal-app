import { createTheme } from "@mui/material";
import { green, red } from "@mui/material/colors";



export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: "#262254"
        },
        secondary: {
            main: "#543884"
        },
        error: {
            main: green[400]
        }
    }
})
